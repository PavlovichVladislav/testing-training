import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import { fireEvent, screen } from "@testing-library/react";

describe("USERS TEST", () => {
   test("test main link", async () => {
      renderWithRouter(<NavBar />, '/users');
      const mainLink = screen.getByTestId("main-link");

      fireEvent.click(mainLink);
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
   });

   test("test about link", async () => {
    renderWithRouter(<NavBar />);
    const aboutLink = screen.getByTestId("about-link");

    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
 });

 test("test users link", async () => {
    renderWithRouter(<NavBar />);
    const usersLink = screen.getByTestId("users-link");

    fireEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
 });
});
