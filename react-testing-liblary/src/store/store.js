import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counterSlice";

export const createReduxStore = (initialState = {}) => {
   return configureStore({
      reducer: { counter },
      preloadedState: initialState
   });
};
