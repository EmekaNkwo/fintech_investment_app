import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "./api/dashboardApi";
import { authApi } from "./api/authApi";

const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([dashboardApi.middleware, authApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
