import { render, screen } from "@testing-library/react";
import Sandwiches from "../Sandwiches";
import { Provider } from "react-redux";
import store from "store";
// import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Sandwiches />
    </Provider>
  );
  expect(screen.getByTestId("sandwiches")).toBeInTheDocument();
});
