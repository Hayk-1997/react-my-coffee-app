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

const SingleProduct = (props) => {
  const {
    API_URL,
    history
  } = props;

  const { language } = useContext(LanguageContext);
  const { VerifyUserTokenSuccess, userId } = useSelector(state => state.VerifyUserToken);
  const slug = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [type, setType] = useState('small');

  const [
    addToCart,
    { addToCartLoading, addToCartData }
  ] = useMutation(ADD_TO_CART, {
    variables: {
      product: product._id,
      quantity,
      type,
      user: userId
    }
  });

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!VerifyUserTokenSuccess) {
      // TODO set dynamic language message
      notify('Need to Sign In After add to cart', 3000, 'ERROR');
      localStorage.setItem('savedProduct', product.slug);
      console.log('product', product);
    } else {
      addToCart();
    }
  };

  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT(language), {
    variables: { ...slug },
  });

  useEffect(() => {
    !loading && setProduct(data.SingleProductQuery);
  }, [loading]);

  return !loading || error ? (
    <section className="ftco-section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 ftco-animate">
            <img src={API_URL + data.SingleProductQuery.mainThumbnail} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 product-details pl-md-5 ftco-animate">
            <h3>{data.SingleProductQuery[language].title}</h3>
            <p className="price"><span>${data.SingleProductQuery.price * quantity}</span></p>
            <div dangerouslySetInnerHTML={{ __html: data.SingleProductQuery[language].description }} />
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap">
                    <div className="icon"><span className="ion-ios-arrow-down"/></div>
                    <select className="form-control" onChange={(e) => setType(e.target.value)}>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="extra">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100"/>
              <div className="input-group col-md-6 d-flex mb-3">
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
    </section>
  ) : <Spinner />;
};

SingleProduct.propTypes = {
  API_URL: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default SingleProduct;