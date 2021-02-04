// Middleware is basically functions that receive actions in, do something with them and then pass them out into the rootReducer. In this case logger is middleware that receives the action, prints it out for us and then passes it along.
// https://redux.js.org/advanced/middleware#the-final-approach

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middlewares = [thunk]; // Including middlewares in an array makes it easy to add/manage middlewares

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); // A persistent version of the store

export default { store, persistor };
