import { IPromiseAction } from 'types';
import { IGetCharactersResponce } from './types';

export enum CharactersActionTypeKeys {
  GET_INIT_CHARACTERS = 'characters/GET_INIT_CHARACTERS',
  GET_INIT_CHARACTERS_FULFILLED = 'characters/GET_INIT_CHARACTERS_FULFILLED',
  GET_CHARACTERS_PAGE = 'GET_CHARACTERS_PAGE',
  GET_CHARACTERS_PAGE_FULFILLED = 'GET_CHARACTERS_PAGE_FULFILLED',
  GET_CHARACTER = 'GET_CHARACTER',
  GET_CHARACTER_FULFILLED = 'GET_CHARACTER_FULFILLED'
}

export interface IGetInitCharactersActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_INIT_CHARACTERS> {}

export interface IGetCharactersFulfilledActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_INIT_CHARACTERS_FULFILLED,
    IGetCharactersResponce> {}

export interface IGetCharactersPageActionType
  extends IPromiseAction<CharactersActionTypeKeys.GET_CHARACTERS_PAGE> {}

export interface IGetCharactersPageFulfilledActionType
  extends IPromiseAction<
    CharactersActionTypeKeys.GET_CHARACTERS_PAGE_FULFILLED,
    IGetCharactersResponce> {}

export interface IGetCharacterActionType
  extends IPromiseAction<CharactersActionTypeKeys.GET_CHARACTER> {}
  
export interface IGetCharacterFulfilledActionType
  extends IPromiseAction<
      CharactersActionTypeKeys.GET_CHARACTER_FULFILLED,
      IGetCharactersResponce> {}

export type ICharacterActionTypes =
  | IGetCharactersFulfilledActionType
  | IGetCharactersPageFulfilledActionType
  | IGetCharacterActionType
  | IGetCharacterFulfilledActionType;

