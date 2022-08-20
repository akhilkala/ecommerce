import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logger],
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
