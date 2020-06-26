import React, { FunctionComponent } from "react";
import map from "lodash/map";

const usageDescriptions = [
  <span key="1" data-testid="usage">
    Click on one of the table <strong>headings</strong> to sort the respective
    columns
  </span>,
  <span key="2" data-testid="usage">
    Use the Search Input to search by IDs
  </span>,
  <span key="3" data-testid="usage">
    Double click or <kbd>Enter</kbd> in one of the <strong>Name</strong> column
    cell to edit and <kbd>Enter</kbd> to save data
  </span>,
  <span key="4" data-testid="usage">
    Use the Pagination tool on bottom right of the grid to change pages
  </span>,
  <span key="5" data-testid="usage">
    Click the View Details button on the grid to move to Details Page
  </span>,
];

const UsageGuide: FunctionComponent = () => (
  <div>
    <h3>Usage Guide</h3>
    <ul>
      {map(usageDescriptions, (description, idx) => (
        <li key={idx}>{description}</li>
      ))}
    </ul>
  </div>
);

export default UsageGuide;
