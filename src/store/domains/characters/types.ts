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

export interface IGetCharactersResponceInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IGetCharactersResponce {
  info: IGetCharactersResponceInfo;
  results: ICharacter[];
}

export interface ICharactersInitialState {
  characters: ICharacter[];
}

export interface ICharactersState {
  characters: ICharactersInitialState;
}
