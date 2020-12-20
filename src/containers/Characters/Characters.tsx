import React, { useEffect } from 'react';

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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
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
      <Wrapper>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id} 
            name={char.name} 
            photo={char.image} 
            status={char.status}
            species={char.species}
          />
        );
      })}
      </Wrapper>
    </>
  );
};

export default Characters;
