import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GlobalStates from "./GlobalStates";

export const store = configureStore({
  reducer: { globalStates: GlobalStates },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

// export const persistor = persistStore(store);
