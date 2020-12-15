import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import reduxThunk from "redux-thunk";
import reduxPromiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";

const createMiddleware = (history: History) => {
  return [
    reduxThunk,
    routerMiddleware(history),
    reduxPromiseMiddleware,
    logger,
  ];
};

export default createMiddleware;
