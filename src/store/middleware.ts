import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';

const createMiddleware = (history: History) => {
  return [
    reduxThunk,
    routerMiddleware(history),
    reduxPromiseMiddleware,
    logger,
  ];
};

export default createMiddleware;
