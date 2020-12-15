import { IPromiseAction } from "types";
import { IGetCharactersResponce } from "./types";

export enum CharactersActionTypeKeys {
  GET_CHARACTERS_LIST = "characters/GET_CHARACTERS_LIST",
  GET_CHARACTERS_LIST_FULLFILLED = "characters/GET_CHARACTERS_LIST_FULLFILLED",
}

export interface IGetCharactersListActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_CHARACTERS_LIST,
    Promise<IGetCharactersResponce>
  > {}

export interface IGetCharactersListFullfilledActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_CHARACTERS_LIST_FULLFILLED,
    Promise<IGetCharactersResponce>
  > {}

export type ICharacterActionTypes =
  | IGetCharactersListActionType
  | IGetCharactersListFullfilledActionType;
