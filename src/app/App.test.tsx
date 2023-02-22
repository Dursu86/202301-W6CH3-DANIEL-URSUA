import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should render", () => {
      render(<App></App>);
      const element = screen.getByText(/probando/i);
    });
  });
});
