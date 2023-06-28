import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRouter from "../../router/AppRouter";
import Navbar from "../../components/Navbar/Navbar";
import { createReduxStore } from "../../store/store";

export const renderTestApp = (component = null, options = { route: "/", state: {} }) => {
   return render(
      <Provider store={createReduxStore(options?.state)}>
         <MemoryRouter initialEntries={[options?.route]}>
            <Navbar />
            <AppRouter />
            {component}
         </MemoryRouter>
      </Provider>
   );
};
