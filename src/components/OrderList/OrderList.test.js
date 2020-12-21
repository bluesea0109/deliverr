import { fireEvent, render, screen } from "@testing-library/react";
import OrderList from "./index";

test("renders learn react link", () => {
  const handlerUpdateMock = jest.fn();
  const props = {
    orders: [{ name: "BLT", price: 35.1223, status: "open" }],
    updateStatus: handlerUpdateMock,
  };
  render(<OrderList {...props} />);
  expect(screen.getByTestId("order-table")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("open-button"));
  expect(handlerUpdateMock).toHaveBeenCalled();
  fireEvent.click(screen.getByTestId("detail-button"));
  expect(screen.getByTestId("modal")).toBeInTheDocument();
});
