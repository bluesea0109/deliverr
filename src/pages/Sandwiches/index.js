import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Sandwich, OrderCart, OrderList } from "components";
import {
  addSandwichRequest,
  updateSandwichRequest,
} from "modules/sandwiches/actions";
import { addOrderRequest, pickedUpOrderRequest } from "modules/orders/actions";
import {
  selectSandwichList,
  selectTotalPrice,
  selectInventory,
} from "modules/sandwiches/selectors";
import { selectOrderList } from "modules/orders/selectors";
import data from "config/data.json";

const Sandwiches = () => {
  const dispatch = useDispatch();
  const orderedSandwiches = useSelector(selectSandwichList);
  const totalPrice = useSelector(selectTotalPrice);
  const inventory = useSelector(selectInventory);

  const orders = useSelector(selectOrderList);

  const handleAddSandwich = (item) => {
    dispatch(addSandwichRequest(item));
  };

  const handleOrder = (totalPrice) => {
    dispatch(
      addOrderRequest({
        name: `order-${new Date().getTime()}`,
        price: totalPrice,
        status: "open",
        orderedSandwiches,
      })
    );
    dispatch(updateSandwichRequest());
  };

  const updateStatus = (order) => {
    dispatch(pickedUpOrderRequest(order));
  };

  return (
    <>
      <div className="sandwiches" data-testid="sandwiches">
        <div className="sandwiches__list">
          {data.menu.map((sandwich, key) => (
            <div className="col-1-of-3" key={key}>
              <Sandwich
                sandwich={sandwich}
                number={key}
                inventory={inventory}
                handleAddSandwich={handleAddSandwich}
              />
            </div>
          ))}
        </div>

        <div className="sandwiches__order-cart">
          <OrderCart
            orderedSandwiches={orderedSandwiches}
            totalPrice={totalPrice}
            handleOrder={handleOrder}
          />
        </div>
      </div>

      <OrderList orders={orders} updateStatus={updateStatus} />
    </>
  );
};

export default Sandwiches;
