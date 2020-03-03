import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./modules/user";
import room from "./modules/room";

const env = process.env.NODE_ENV;

const history = require("history").createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === 'development') {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  room,
  router: connectRouter(history)
});

let store;

if (env === "development") {
  store = initalState => 
    createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initalState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();