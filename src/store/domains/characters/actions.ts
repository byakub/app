import {
  CharactersActionTypeKeys,
  IGetCharactersListActionType,
} from "./actionTypes";

import { apiClient } from "services";

export type GetCharactersListAction = () => IGetCharactersListActionType;

export const getCharactersListAction: GetCharactersListAction = () => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS_LIST,
  payload: apiClient.get("/characters"),
});
