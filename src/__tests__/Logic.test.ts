import { getIdFromPath } from "../utils/detailUtils";

describe("This test suite is designed to test the utilities logic", () => {
  test("path returns id correctly", () => {
    expect(getIdFromPath("/shipments")).toBe("shipments");
  });
});
