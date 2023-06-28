import { fireEvent, screen } from "@testing-library/react";

import { renderTestApp } from "./tests/helpers/renderTestApp";

describe("Test app", () => {
   test("Router test`", () => {
      renderTestApp();

      const mainLink = screen.getByTestId("main-link");
      const aboutLink = screen.getByTestId("about-link");

      fireEvent.click(aboutLink);
      expect(screen.getByTestId("about-page")).toBeInTheDocument();

      fireEvent.click(mainLink);
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
   });

   test("Not found route test`", () => {
      renderTestApp(null, { route: "/helloworld", state: {} });

      expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
   });
});
