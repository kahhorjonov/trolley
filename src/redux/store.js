import { configureStore } from "@reduxjs/toolkit";
import operationReducer from "./slices/operationSlice";

export const store = configureStore({
  reducer: {
    operations: operationReducer,
  },
});
