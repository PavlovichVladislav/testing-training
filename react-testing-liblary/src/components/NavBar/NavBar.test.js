import { renderTestApp } from "../../tests/helpers/renderTestApp";
import { fireEvent, screen } from "@testing-library/react";

describe("USERS TEST", () => {
   test("main link", async () => {
      renderTestApp(null, { route: "/users", state: {} });
      const mainLink = screen.getByTestId("main-link");

      fireEvent.click(mainLink);
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
   });

   test("about link", async () => {
      renderTestApp();
      const aboutLink = screen.getByTestId("about-link");

      fireEvent.click(aboutLink);
      expect(screen.getByTestId("about-page")).toBeInTheDocument();
   });

   test("users link", async () => {
      renderTestApp();
      const usersLink = screen.getByTestId("users-link");

      fireEvent.click(usersLink);
      expect(screen.getByTestId("users-page")).toBeInTheDocument();
   });
});
