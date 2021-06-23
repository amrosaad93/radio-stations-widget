import React from "react";
import Header from "../Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Title renders with correct text", () => {
  const component = render(<Header />);
  const headerEl = component.getByTestId("title");

  expect(headerEl.textContent).toBe("Stations");
});
