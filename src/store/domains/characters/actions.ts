import {
  CharactersActionTypeKeys,
  IGetCharacterActionType,
  IGetCharactersPageActionType,
  IGetInitCharactersActionType,
} from './actionTypes';

import { selectCharacters } from './selectors';

import { IThunk } from 'types';

import * as api from './api';

export type GetInitCharactersAction = () => IGetInitCharactersActionType;

export const getInitCharactersAction: GetInitCharactersAction = () => ({
  type: CharactersActionTypeKeys.GET_INIT_CHARACTERS,
  payload: api.getCharactersData(),
});

export type GetCharactersPageAction = (page: number) => IGetCharactersPageActionType;

export const getCharactersPageAction: GetCharactersPageAction = page => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS_PAGE,
  payload: api.getCharactersPage(page),
});

export type GetCharacterAction = (character: object) => IGetCharacterActionType;

export const getCharacterAction: GetCharacterAction = character => ({
  type: CharactersActionTypeKeys.GET_CHARACTER,
  payload: character,
});

export type HandleCharacterAction = (id: number) => IThunk<void>;

export const handleCharacterAction: HandleCharacterAction = id => async (dispatch, getState) => {
  const state = selectCharacters(getState());
  const character = state.find(character => character.id === id) || api.getCharacterData(id);
  dispatch(getCharacterAction(character));
};

export type HandleCharactersPageAction = (page: number) => IThunk<void>;

export const handleCharactersPageAction: HandleCharactersPageAction = page => async dispatch => {
  dispatch(getCharactersPageAction(page));
};

export type HandleInitCharactersAction = () => IThunk<void>;

export const handleInitCharactersAction: HandleInitCharactersAction = () => async dispatch => {
  dispatch(getInitCharactersAction());
};
