import { IPromiseAction } from "types";
import { IGetCharactersResponce } from "./types";

export enum CharactersActionTypeKeys {
  GET_CHARACTERS_LIST = "characters/GET_CHARACTERS_LIST",
  GET_CHARACTERS_LIST_FULFILLED = "characters/GET_CHARACTERS_LIST_FULFILLED",
}

export interface IGetCharactersListActionType
  extends IPromiseAction<CharactersActionTypeKeys.GET_CHARACTERS_LIST> {}

export interface IGetCharactersListFulfilledActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_CHARACTERS_LIST_FULFILLED,
    IGetCharactersResponce> {}

export type ICharacterActionTypes =
  | IGetCharactersListActionType
  | IGetCharactersListFulfilledActionType;
