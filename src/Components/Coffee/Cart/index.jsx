import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartTotal from '../CartTotals';
import { useQuery } from '@apollo/react-hooks';
import { GET_CART } from '../../../graphQL/queries';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../Context/LanguageContext';
import Spinner from '../../Spinner';
import CartList from './CartList';

const Cart = (props) => {
  const { API_URL } = props;
  const { language } = useContext(LanguageContext);
  const { userId } = useSelector(state => state.VerifyUserToken);
  const { loading, error, data } = useQuery(GET_CART(language), {
    variables: {
      user: userId
    },
  });
  
  return loading || error ? <Spinner /> : (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.CartQuery.map((cart, index) => (
                      <CartList
                        key={index}
                        language={language}
                        cart={cart}
                        API_URL={API_URL}
                      />
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <CartTotal />
      </div>
    </section>
  );
};

Cart.propTypes = {
  API_URL: PropTypes.string.isRequired,
};

export default Cart;