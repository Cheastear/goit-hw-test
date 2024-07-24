import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalog/slice";
import { filterReducer } from "./filter/slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { favoriteReducer } from "./favorite/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
