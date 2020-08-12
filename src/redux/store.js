// Middleware is basically functions that receive actions in, do something with them and then pass them out into the rootReducer. In this case logger is middleware that receives the action, prints it out for us and then passes it along.
// https://redux.js.org/advanced/middleware#the-final-approach

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger]; // Including middlewares in an array makes it easy to add/manage middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
