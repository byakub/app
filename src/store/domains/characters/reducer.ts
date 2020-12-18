import Immutable, { ImmutableObject } from 'seamless-immutable';

import { CharactersActionTypeKeys, ICharacterActionTypes } from './actionTypes';
import { ICharactersState } from './types';

const charactersInitialState: ImmutableObject<ICharactersState> = Immutable({
  charactersList: Immutable([]),
  meta: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
    items: 0
  }
});

export const charactersReducer = (
  state = charactersInitialState,
  action: ICharacterActionTypes
) => {
  switch (action.type) {
    case CharactersActionTypeKeys.GET_INIT_CHARACTERS_FULFILLED: {
      return state
        .set('meta', action.payload.info)
        .set('charactersList', action.payload.results)
        .setIn(['meta', 'items'], action.payload.results.length);
    }
    case CharactersActionTypeKeys.GET_CHARACTERS_PAGE_FULFILLED: {
      return state
        .set('charactersList', action.payload.results);
    }
    default:
      return state;
  }
};
