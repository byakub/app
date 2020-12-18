import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ImmutableArray, ImmutableObject } from 'seamless-immutable';

import { Card } from 'components';

import { 
  HandleInitCharactersAction,  
  ICharacter,
} from 'store';

interface ICharacters {
  characters: ImmutableArray<ICharacter>;
  handleInitCharactersAction: HandleInitCharactersAction;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

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
      <Wrapper>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id} 
            name={char.name} 
            photo={char.image} 
            link={char.status}
          />
        )
      })}
      </Wrapper>
    </>
  );
};

export default Characters;
