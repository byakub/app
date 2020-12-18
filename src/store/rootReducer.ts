import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { charactersReducer } from './domains/characters/reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    characters: charactersReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
