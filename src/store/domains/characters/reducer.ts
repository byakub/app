import { CharactersActionTypeKeys, ICharacterActionTypes } from "./actionTypes";
import { ICharactersInitialState } from "./types";

const charactersInitialState: ICharactersInitialState = {
  characters: [],
};

export const charactersReducer = (
  state = charactersInitialState,
  actions: ICharacterActionTypes
) => {
  switch (actions.type) {
    case CharactersActionTypeKeys.GET_CHARACTERS_LIST: {
      console.log("hello from reducer!!!!");
      return state;
    }
    default:
      return state;
  }
};
