import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

describe("Counter test", () => {
   test("incr btn", async () => {
      render(
         <Provider store={createReduxStore({counter: {value: 10}})}>
            <Counter />
         </Provider>
      );

      const incrBtn = screen.getByTestId("increment");
      expect(screen.getByTestId("counter-title")).toHaveTextContent(`value = ${10}`);

      fireEvent.click(incrBtn);
      expect(screen.getByTestId("counter-title")).toHaveTextContent(`value = ${11}`);
   });
});
