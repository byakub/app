import React, { useEffect, useState } from 'react';

import { ImmutableArray, ImmutableObject } from 'seamless-immutable';

import styled from 'styled-components';

import { Pagination } from 'antd';

import { Card } from 'components';

import {
  HandleCharactersPageAction,
  ICharacter,
  ICharactersMeta, 
} from 'store';

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;

interface ICharacters {
  characters: ImmutableArray<ICharacter>;
  metaCharacters: ICharactersMeta;
  handleCharactersPageAction: HandleCharactersPageAction;
}

export const CharactersPages: React.FC<ICharacters> = props => {
  const {
    handleCharactersPageAction,
    characters,
    metaCharacters
  } = props;

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    handleCharactersPageAction(page);
  }, [page]);
  
  return (
    <>
      <Pagination
        current={page} 
        onChange={ page => setPage(page)} 
        total={metaCharacters.count}
        defaultPageSize={metaCharacters.items}
        pageSizeOptions={[]}
        style={{
          textAlign: 'center',
          paddingTop: '1rem'
        }}
      />
      <Wrapper>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id} 
            name={char.name} 
            photo={char.image} 
            status={char.gender}
            species={char.species}
          />
        );
      })}
      </Wrapper>
    </>
  );
};

export default CharactersPages;
