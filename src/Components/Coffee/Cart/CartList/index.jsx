import React, { memo, useState } from 'react';
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
        <td className="price">${cart.type.price}</td>
        <td className="quantity">
          <div className="input-group mb-3">
            <div className="input-group d-flex">
              <span className="input-group-btn mr-2">
                <button
                  type="button"
                  className="quantity-left-minus btn"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
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
                  onClick={() => setQuantity(Number(quantity) + 1)}
                >
                  <i className="icon-plus"/>
                </button>
              </span>
            </div>
          </div>
        </td>
        <td className="total">${quantity * cart.type.price}</td>
      </tr>
    </>
  );
};

CartList.propTypes = {
  cart: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  API_URL: PropTypes.string.isRequired
};

export default memo(CartList);