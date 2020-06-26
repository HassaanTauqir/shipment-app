import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("This test suite is designed to test the functionality of app and header", () => {
  test("renders header text", () => {
    const { getByText, getByAltText } = render(<App />);
    const headerSpan = getByText(/Shipment App/i);
    const logoImg = getByAltText("logo");
    expect(headerSpan).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
  });
});
