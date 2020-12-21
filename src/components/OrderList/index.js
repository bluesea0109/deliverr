import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-responsive-modal";
import { OrderCart } from "components";

import "react-responsive-modal/styles.css";

const OrderList = ({ orders, updateStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const showDetail = (item) => {
    setShowModal(true);
    setCurrentOrder(item);
  };

  return (
    <>
      <table className="order-table" data-testid="order-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.length > 0 &&
            orders.map((order, key) => (
              <tr key={key}>
                <td>{order.name}</td>
                <td>${order.price.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>
                  {order.status === "open" && (
                    <button
                      onClick={() => updateStatus(order)}
                      data-testid="open-button"
                    >
                      Pick up
                    </button>
                  )}
                  <button
                    onClick={() => showDetail(order)}
                    data-testid="detail-button"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal
        classNames="modal"
        open={showModal}
        onClose={() => setShowModal(false)}
        data-testid="modal"
      >
        {currentOrder && (
          <OrderCart
            orderedSandwiches={currentOrder.orderedSandwiches}
            totalPrice={currentOrder.price}
            showDetail={showModal}
          />
        )}
      </Modal>
    </>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array,
  updateStatus: PropTypes.func,
};

export default OrderList;
