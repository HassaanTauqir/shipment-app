import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DetailButton from "../components/DetailButton";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("This test suite is designed to test the functionality of app and header", () => {
  it("goes to details page after clicking view details button", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <DetailButton id="S1000" />
      </Router>,
    );

    const detailsBtn = getByTestId("details-btn");
    fireEvent.click(detailsBtn);
    expect(history.location.pathname).toBe("/S1000");
  });
});
