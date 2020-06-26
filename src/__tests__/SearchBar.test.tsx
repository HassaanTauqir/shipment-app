import React, { useState } from "react";
import { render } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("This test suite is designed to test the functionality of search bar", () => {
  test("renders search input", () => {
    const setValue = jest.fn(useState);
    const value = "Fake Value";
    const { getByPlaceholderText } = render(
      <SearchBar setValue={setValue} value={value} />,
    );

    const searchInput = getByPlaceholderText(/Enter Search ID/i);
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
    expect(searchInput).toHaveValue("Fake Value");
  });
});
