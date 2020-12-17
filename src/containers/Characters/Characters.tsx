import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ImmutableArray, ImmutableObject } from 'seamless-immutable';

import { Card } from 'components'

import { 
  ICharacter,
  HandleInitCharactersAction,  
} from 'store'

interface ICharacters {
  characters: ImmutableArray<ICharacter>,
  handleInitCharactersAction: HandleInitCharactersAction,
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
      <Link to="/characters">To list</Link>
      <br/>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id} 
            name={char.name} 
            photo={char.image} 
            link={char.url}
          />
        )
      })}
    </>
  )
};

export default Characters;
