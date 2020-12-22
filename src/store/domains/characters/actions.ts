import {
  CharactersActionTypeKeys,
  IGetCharacterActionType,
  IGetCharactersPageActionType,
  IGetInitCharactersActionType,
  ISetCharacterActionType,
  ISetCurrentPageActionType
} from './actionTypes';

import { ICharacter } from './types';

import { selectCharacters } from './selectors';

import { IThunk } from 'types';

import * as api from './api';

export type GetInitCharactersAction = () => IGetInitCharactersActionType;

export const getInitCharactersAction: GetInitCharactersAction = () => ({
  type: CharactersActionTypeKeys.GET_INIT_CHARACTERS,
  payload: api.getCharacters(),
});

export type GetCharactersPageAction = (page: number) => IGetCharactersPageActionType;

export const getCharactersPageAction: GetCharactersPageAction = page => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS_PAGE,
  payload: api.getCharactersPage(page),
});

export type SetCharacterAction = (character: ICharacter) => ISetCharacterActionType;

export const setCharacterAction: SetCharacterAction = character => ({
  type: CharactersActionTypeKeys.SET_CHARACTER,
  value: character,
});

export type SetCurrentPageAction = (page: number) => ISetCurrentPageActionType;

export const setCurrentPageAction: SetCurrentPageAction = page => ({
  type: CharactersActionTypeKeys.SET_CURRENT_PAGE,
  value: page,
});

export type GetCharacterAction = (id: number) => IGetCharacterActionType;

export const getCharacterAction: GetCharacterAction = id => ({
  type: CharactersActionTypeKeys.GET_CHARACTER,
  payload: api.getCharacter(id),
});

export type HandleCharacterAction = (id: number) => IThunk<void>;

export const handleCharacterAction: HandleCharacterAction = id => async (dispatch, getState) => {
  const characters = selectCharacters(getState());
  const character = characters.find(char => char.id === id);
  console.log(character,'character');
  character !== undefined ? 
    dispatch(setCharacterAction(character))
    :
    dispatch(getCharacterAction(id));
};

export type HandleCharactersPageAction = (page: number) => IThunk<void>;

export const handleCharactersPageAction: HandleCharactersPageAction = page => async dispatch => {
  dispatch(getCharactersPageAction(page));
};

export type HandleInitCharactersAction = () => IThunk<void>;

export const handleInitCharactersAction: HandleInitCharactersAction = () => async dispatch => {
  dispatch(getInitCharactersAction());
};
