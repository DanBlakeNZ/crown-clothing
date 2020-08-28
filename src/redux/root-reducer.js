// Root Reducer represents all of the state of our application.
// Combines all of the other reducer states together.

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Actually the window.localStorage object.

import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root", // At what point do we want to start storing everything - from the root.
  storage,
  whitelist: [
    // Array containing the string names of the reducers we want to store.
    "cart",
  ],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
