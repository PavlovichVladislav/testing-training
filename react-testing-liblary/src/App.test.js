import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Test app", () => {
   test("renders layout`", () => {
      render(<App />);
      const helloWorldElem = screen.getByText(/hello world/i);
      const btn = screen.getByRole("button");
      const input = screen.getByPlaceholderText(/input value/i);

      expect(helloWorldElem).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
      expect(input).toMatchSnapshot();
   });

   test("elem does not exist on page`", () => {
      render(<App />);
      const helloElem = screen.queryByText(/hello2/i);
      expect(helloElem).toBeNull();
   });

   test("the element appears on the page after some time`", async () => {
      render(<App />);
      screen.debug();
      const dataElem = await screen.findByText(/data/i);
      expect(dataElem).toBeInTheDocument();
      expect(dataElem).toHaveStyle({ color: "red" });
      screen.debug();
   });

   test("CLICK EVENT`", async () => {
      render(<App />);
      const btn = screen.getByTestId("toggle-button");

      expect(screen.queryByTestId("toggle-elem")).toBeNull();
      fireEvent.click(btn);
      expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
      fireEvent.click(btn);
      expect(screen.queryByTestId("toggle-elem")).toBeNull();
   });

   test("INPUT EVENT`", async () => {
      render(<App />);
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
