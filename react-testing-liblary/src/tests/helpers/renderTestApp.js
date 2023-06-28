import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRouter from "../../router/AppRouter";
import { createReduxStore } from "../../store/store";

export const renderTestApp = (component, options) => {
   return render(
      <Provider store={createReduxStore(options?.state)}>
         <MemoryRouter initialEntries={[options?.route]}>
            <AppRouter />
            {component}
         </MemoryRouter>
      </Provider>
   );
};
