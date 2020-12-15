import {
  CharactersActionTypeKeys,
  IGetCharactersListActionType,
} from "./actionTypes";

import * as api from "./api";

export type GetCharactersListAction = () => IGetCharactersListActionType;

export const getCharactersListAction: GetCharactersListAction = () => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS_LIST,
  payload: api.getCharactersData(),
});
