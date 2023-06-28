import { fireEvent, render, screen } from "@testing-library/react";

import Users from "./Users";

import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "../../pages/UserDetailsPage";
import AppRouter from "../../router/AppRouter";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("Test Users", () => {
   let response;

   beforeEach(() => {
      response = {
         data: [
            {
               id: 1,
               name: "Leanne Graham",
            },
            {
               id: 2,
               name: "Ervin Howell",
            },
            {
               id: 3,
               name: "Clementine Bauch",
            },
         ],
      };
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   test("renders layout", async () => {
      axios.get.mockReturnValue(response);
      render(
         <MemoryRouter>
            <Users />
         </MemoryRouter>
      );

      const users = await screen.findAllByTestId("user-item");

      expect(users.length).toBe(3);
      expect(axios.get).toBeCalledTimes(1);
      //eslint-disable-next-line
      screen.debug();
   });

   test("redirect to details page", async () => {
      axios.get.mockReturnValue(response);
      renderWithRouter(null, "/users");

      const users = await screen.findAllByTestId("user-item");
      fireEvent.click(users[0]);
      expect(screen.getByTestId("user-page")).toBeInTheDocument();
   });
});
