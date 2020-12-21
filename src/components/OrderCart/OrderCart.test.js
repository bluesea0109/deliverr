import { fireEvent, render, screen } from "@testing-library/react";
import OrderCard from "./index";
// import App from "./App";

test("renders learn react link", () => {
  const handlerOrderMock = jest.fn();
  const props = {
    orderedSandwiches: [{ name: "BLT", price: 35.1223 }],
    totalPrice: 34.5555,
    handleOrder: handlerOrderMock,
  };
  render(<OrderCard {...props} />);
  expect(screen.getByTestId("order-cart-head")).toBeInTheDocument();
  expect(screen.getByTestId("order-cart-body")).toBeInTheDocument();
  expect(screen.getByTestId("order-card-footer")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("order-button"));
  expect(handlerOrderMock).toHaveBeenCalled();
});
