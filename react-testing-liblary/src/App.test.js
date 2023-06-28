import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderTestApp } from "./tests/helpers/renderTestApp";

describe("Test app", () => {
   test("renders layout`", () => {
      renderTestApp(null);
      const helloWorldElem = screen.getByText(/hello world/i);
      // const btn = screen.getByRole("button"); // плохой способ, много совпадений
      const btn = screen.getByTestId("toggle-button");
      const input = screen.getByPlaceholderText(/input value/i);

      expect(helloWorldElem).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
      expect(input).toMatchSnapshot();
   });

   test("elem does not exist on page`", () => {
      renderTestApp();
      const helloElem = screen.queryByText(/hello2/i);
      expect(helloElem).toBeNull();
   });

   test("the element appears on the page after some time`", async () => {
      renderTestApp();
      //eslint-disable-next-line
      screen.debug();
      const dataElem = await screen.findByText(/data/i);
      expect(dataElem).toBeInTheDocument();
      expect(dataElem).toHaveStyle({ color: "red" });
      //eslint-disable-next-line
      screen.debug();
   });

   test("CLICK EVENT`", async () => {
      renderTestApp();
      const btn = screen.getByTestId("toggle-button");

      expect(screen.queryByTestId("toggle-elem")).toBeNull();
      fireEvent.click(btn);
      expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
      fireEvent.click(btn);
      expect(screen.queryByTestId("toggle-elem")).toBeNull();
   });

   test("INPUT EVENT`", async () => {
      renderTestApp();
      const input = screen.getByPlaceholderText(/input value/i);
      expect(screen.queryByTestId("value-elem")).toContainHTML('');

      // искусственное событие
      fireEvent.input(input, {
         target: {value: '123'}
      });
      
      // пользовательское событие
      userEvent.type(input, '123')

      expect(screen.queryByTestId("value-elem")).toContainHTML('123123');
   });
});
