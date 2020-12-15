import { IThunk } from "types";

import { getCharactersListAction } from "./characters";

export type HandleInitAction = () => IThunk<void>;

export const handleInitAction: HandleInitAction = () => async (dispatch) => {
  dispatch(getCharactersListAction());
};
