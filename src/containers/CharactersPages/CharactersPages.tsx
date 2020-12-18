import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
      <Link to="/">To Home Page</Link>
      <Wrapper>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id} 
            name={char.name} 
            photo={char.image} 
            link={char.gender}
          />
        );
      })}
      </Wrapper>
      <Pagination
        current={page} 
        onChange={ page => setPage(page)} 
        total={metaCharacters.count}
        defaultPageSize={metaCharacters.items}
        pageSizeOptions={[]}
        style={{
          textAlign: 'center',
          padding: '1rem'
        }}
      />
    </>
  );
};

export default CharactersPages;
