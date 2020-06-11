import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders small button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/small button/i);
  expect(linkElement).toBeInTheDocument();
});
