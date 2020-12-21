import { IStoreState } from 'store';

export const selectCharacter = (state: IStoreState) => state.characters.character;
export const selectCharacters = (state: IStoreState) => state.characters.charactersList;
export const selectMetaCharacters = (state: IStoreState) => state.characters.meta;
