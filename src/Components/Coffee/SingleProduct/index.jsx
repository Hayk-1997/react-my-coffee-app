import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../../Config/Notify';
import { GET_SINGLE_PRODUCT } from '../../../graphQL/queries';
import { ADD_TO_CART } from '../../../graphQL/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import RecentProduct from './RecentProducts';

const SingleProduct = (props) => {
  const {
    API_URL,
  } = props;

  const slug = useParams();
  const { language } = useContext(LanguageContext);
  const { VerifyUserTokenSuccess, userId } = useSelector(state => state.VerifyUserToken);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [type, setType] = useState({});
  const { loading, data } = useQuery(GET_SINGLE_PRODUCT(language),{ variables: { ...slug } });
  const [addToCart] = useMutation(ADD_TO_CART, {
    variables: {
      product: product._id,
      quantity,
      type,
      user: userId
    }
  });
  useEffect(() => {
    if (!loading) {
      setProduct(data.SingleProductQuery);
      setType(data.SingleProductQuery[language].types[0]);
    }
  }, [loading]);

  const handleChangeType = (event) => {
    const { price, label } = JSON.parse(event.target.value);
    setType({ label, price });
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!VerifyUserTokenSuccess) {
      // TODO set dynamic language message
      notify('Need to Sign In After add to cart', 3000, 'ERROR');
      localStorage.setItem('savedProduct', product.slug);
    } else {
      addToCart();
    }
  };

  return !Object.keys(product).length ? <Spinner /> : (
    <section className="ftco-section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 mb-5 ftco-animate">
                <img src={API_URL + product.mainThumbnail} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 product-details pl-md-5 ftco-animate">
                <h3>{product[language].title}</h3>
                <p className="price"><span>${type.price * quantity}</span></p>
                <div dangerouslySetInnerHTML={{ __html: product[language].description }} />
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="form-group d-flex">
                      <div className="select-wrap">
                        <div className="icon"><span className="ion-ios-arrow-down"/></div>
                        <select className="form-control" onChange={handleChangeType}>
                          {
                            product[language].types.map((type, index) => (
                              <option value={JSON.stringify({ price:type.price, label: type.label })} key={index}>{ type.label }</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"/>
                  <div className="input-group col-md-12 d-flex mb-3">
                    <span className="input-group-btn mr-2">
                      <button
                        type="button"
                        className="quantity-left-minus btn"
                        onClick={() => setQuantity(quantity === 2 ? quantity - 1 : 1)}
                      >
                        <i className="icon-minus"/>
                      </button>
                    </span>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="form-control input-number"
                      value={quantity}
                      min="1"
                      max="100"
                      disabled={true}
                    />
                    <span className="input-group-btn ml-2">
                      <button
                        type="button"
                        className="quantity-right-plus btn"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="icon-plus"/>
                      </button>
                    </span>
                  </div>
                </div>
                <p>
                  <a
                    className="btn btn-primary py-3 px-5"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <RecentProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

SingleProduct.propTypes = {
  API_URL: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default SingleProduct;