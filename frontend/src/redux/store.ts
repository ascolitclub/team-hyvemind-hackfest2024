import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
