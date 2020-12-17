import { IStoreState } from 'store';
export const selectCharacters = (state: IStoreState) => state.characters.charactersList
export const selectMetaCharacters = (state: IStoreState) => state.characters.meta
