import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";

const createMiddleware = (history: History) => {
  return [reduxThunk, routerMiddleware(history), logger];
};

export default createMiddleware;
