import { fireEvent, screen } from "@testing-library/react";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Counter test", () => {
   test("incr btn", async () => {
      renderTestApp(null, {
         route: "/",
         state: { counter: { value: 10 } },
      });

      const incrBtn = screen.getByTestId("increment-button");
      expect(screen.getByTestId("counter-title")).toHaveTextContent(`value = ${10}`);

      fireEvent.click(incrBtn);
      expect(screen.getByTestId("counter-title")).toHaveTextContent(`value = ${11}`);
   });
});
