import React, { useEffect } from 'react';

import { ImmutableArray } from 'seamless-immutable';

import { HomePage } from 'components/HomePage';

import { 
  HandleInitCharactersAction,  
  ICharacter,
} from 'store';

interface ICharacters {
  characters: ImmutableArray<ICharacter>;
  handleInitCharactersAction: HandleInitCharactersAction;
}

export const Characters: React.FC<ICharacters> = props => {
  const {
    characters,
    handleInitCharactersAction,
  } = props;

  useEffect(() => {
    handleInitCharactersAction();
  }, []);
  
  return (
    <>
      <HomePage/>
    </>
  );
};

export default Characters;
