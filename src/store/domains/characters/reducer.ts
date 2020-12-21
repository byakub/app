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
  },
  character: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
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
    case CharactersActionTypeKeys.SET_CHARACTER: {
      return state
        .set('character', action.value);
    }
    case CharactersActionTypeKeys.GET_CHARACTER_FULFILLED: {
      return state
        .set('character', action.payload);
    }
    default:
      return state;
  }
};
