import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CartList = (props) => {
  const { cart, language, API_URL } = props;
  const [quantity, setQuantity] = useState(cart.quantity);
  return (
    <>
      <tr className="text-center">
        <td className="product-remove"><span className="icon-close"/></td>
        <td className="image-prod">
          <div className="img" style={{ backgroundImage: `url(${API_URL + cart.product.mainThumbnail})` }} />
        </td>
        <td className="product-name">
          <h3>{cart.product[language].title}</h3>
        </td>
        <td className="price">${cart.product.price}</td>
        <td className="quantity">
          <div className="input-group mb-3">
            <input
              type="text"
              name="quantity"
              className="quantity form-control input-number"
              value={quantity}
              maxLength={2}
              onChange={e => setQuantity(e.target.value > 0 ? e.target.value : 1)}
              min="1" max="100" />
          </div>
        </td>
        <td className="total">${quantity * cart.product.price}</td>
      </tr>
    </>
  );
};

CartList.propTypes = {
  cart: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  API_URL: PropTypes.string.isRequired
};

export default CartList;