import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Test app", () => {
   test("Router test`", () => {
      render(
         <MemoryRouter>
            <App />
         </MemoryRouter>
      );
      const mainLink = screen.getByTestId("main-link");
      const aboutLink = screen.getByTestId("about-link");

      fireEvent.click(aboutLink);
      expect(screen.getByTestId("about-page")).toBeInTheDocument();

      fireEvent.click(mainLink);
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
   });

   test("Not found route test`", () => {
      render(
         <MemoryRouter initialEntries={["/helloworld"]}>
            <App />
         </MemoryRouter>
      );

      expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
   });
});
