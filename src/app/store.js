import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice'
import appReducer from '../features/app/appSlice'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  app: appReducer,
  authentication: authenticationReducer
});

const persistConfig = {
  key: "root",
  storage,
 /*  trasnforms: [usersBalcklist, orderaddBalcklist], */
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});