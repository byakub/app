import {
  CharactersActionTypeKeys,
  IGetInitCharactersActionType,
  IGetCharactersPageActionType
} from "./actionTypes";

import { IThunk } from "types";

import * as api from "./api";

export type GetInitCharactersAction = () => IGetInitCharactersActionType;

export const getInitCharactersAction: GetInitCharactersAction = () => ({
  type: CharactersActionTypeKeys.GET_INIT_CHARACTERS,
  payload: api.getCharactersData(),
});

export type GetCharactersPageAction = (url:string) => IGetCharactersPageActionType;

export const getCharactersPageAction: GetCharactersPageAction = (url) => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS_PAGE,
  payload: api.getCharactersPage(url),
});

export type HandleCharactersPageAction = () => IThunk<void>;

export const handleCharactersPageAction: HandleCharactersPageAction = () => async (dispatch,getState) => {
  const state = getState();
  dispatch(getCharactersPageAction(state.characters.meta.next!));
};

export type HandleInitCharactersAction = () => IThunk<void>;

export const handleInitCharactersAction: HandleInitCharactersAction = () => async (dispatch) => {
  dispatch(getInitCharactersAction());
};
