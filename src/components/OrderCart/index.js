import React from "react";
import PropTypes from "prop-types";

const OrderCart = ({
  orderedSandwiches,
  totalPrice,
  handleOrder,
  showDetail = false,
}) => (
  <div className="order-cart">
    {!showDetail && (
      <>
        <div className="order-cart__items-head" data-testid="order-cart-head">
          <p className="order-cart__title">Order Cart</p>
          <p className="order-cart__total-price">${totalPrice.toFixed(2)}</p>
        </div>
        <hr className="order-cart__underline" />
      </>
    )}
    <div className="order-cart__items-body" data-testid="order-cart-body"></div>
    {orderedSandwiches &&
      orderedSandwiches.length > 0 &&
      orderedSandwiches.map((sandwiche, key) => (
        <div key={key} className="order-cart__items-body-content">
          <span>{sandwiche.name}</span>
          <span>${sandwiche.price}</span>
        </div>
      ))}
    {!showDetail && orderedSandwiches && orderedSandwiches.length > 0 && (
      <div className="order-cart__items-footer" data-testid="order-card-footer">
        <button
          className="btn order-cart__order-btn"
          onClick={() => handleOrder(totalPrice)}
          data-testid="order-button"
        >
          Order
        </button>
      </div>
    )}
  </div>
);

OrderCart.propTypes = {
  orderedSandwiches: PropTypes.array,
  totalPrice: PropTypes.number,
  handleOrder: PropTypes.func,
  showDetail: PropTypes.bool,
};

export default OrderCart;
