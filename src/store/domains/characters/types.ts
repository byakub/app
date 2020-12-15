import { ImmutableArray } from 'seamless-immutable';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IGetCharactersResponce {
  info: ICharactersInfo; results: ICharacter[] ;
}

export interface ICharactersState {
  charactersList: ImmutableArray<ICharacter>;
  info: ICharactersInfo
}
