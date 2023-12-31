import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GlobalStates from "./GlobalStates";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import AuthSlice from "./AuthSlice";

const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  globalStates: GlobalStates,
  auth: AuthSlice,
});

const persisteRoot = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: { root: persisteRoot },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
