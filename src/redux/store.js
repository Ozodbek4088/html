import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "./TestApi";
import TestReducer from "./TestsSlice";

export const store = configureStore({
  reducer: {
    tests: TestReducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});
