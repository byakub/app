import Immutable, { ImmutableObject } from 'seamless-immutable';

import { CharactersActionTypeKeys, ICharacterActionTypes } from "./actionTypes";
import { ICharactersState } from "./types";

const charactersInitialState: ImmutableObject<ICharactersState> = Immutable({
  charactersList: Immutable([]),
  info:{
    count:0,
    pages:0,
    next:null,
    prev:null
  }
});

export const charactersReducer = (
  state = charactersInitialState,
  action: ICharacterActionTypes
) => {
  switch (action.type) {
    case CharactersActionTypeKeys.GET_CHARACTERS_LIST_FULFILLED: {
      return state
        .set("charactersList",action.payload.results)
        .set("info",action.payload.info)
    }
    default:
      return state;
  }
};
