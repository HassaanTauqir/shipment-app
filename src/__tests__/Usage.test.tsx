import React from "react";
import { render } from "@testing-library/react";
import UsageGuide from "../components/UsageGuide";

describe("This test suite is designed to test the functionality of usage guide", () => {
  test("renders usage guide list", () => {
    const { getAllByTestId } = render(<UsageGuide />);
    const usageList = getAllByTestId("usage");
    expect(usageList).toHaveLength(5);
  });
});
