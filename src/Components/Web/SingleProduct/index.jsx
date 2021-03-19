import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../../Config/Notify';
import { GET_SINGLE_PRODUCT } from '../../../graphQL/queries';
import { useQuery } from '@apollo/react-hooks';

const SingleProduct = (props) => {
  const {
    API_URL,
    history
  } = props;

  const { language } = useContext(LanguageContext);
  const { VerifyUserTokenSuccess } = useSelector(state => state.VerifyUserToken);
  const slug = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  const addToCart = (event) => {
    event.preventDefault();
    if (!VerifyUserTokenSuccess) {
      notify('Need to Sign In After add to cart', 3000, 'ERROR');
      sessionStorage.setItem('savedProduct', product.slug);
    }
  };

  const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT(language), {
    variables: { ...slug },
  });

  useEffect(() => {
     data && setProduct(data.SingleProductQuery);
  }, [data?.SingleProductQuery]);

  return loading || error ? <Spinner /> : (
    <section className="ftco-section">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 ftco-animate">
            <img src={API_URL + product.mainThumbnail} className="img-fluid" alt="Colorlib Template" />
          </div>
          <div className="col-lg-6 product-details pl-md-5 ftco-animate">
            <h3>{product[language]?.title}</h3>
            <p className="price"><span>${product.price * quantity}</span></p>
            <div dangerouslySetInnerHTML={{ __html: product[language]?.description }} />
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group d-flex">
                  <div className="select-wrap">
                    <div className="icon"><span className="ion-ios-arrow-down"/></div>
                    <select name="" id="" className="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
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
                onClick={addToCart}
              >
                Add to Cart
              </a>
            </p>
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