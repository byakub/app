import React, { useEffect, useState } from 'react';

import { ImmutableArray, ImmutableObject } from 'seamless-immutable';

import styled from 'styled-components';

import { Pagination } from 'antd';

import { Card } from 'components';

import { Redirect } from 'react-router';

import { useHistory } from 'react-router-dom';

import { RouteConst } from 'consts';

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

export const Characters: React.FC<ICharacters> = props => {
  const {
    handleCharactersPageAction,
    characters,
    metaCharacters
  } = props;

  const history = useHistory();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    handleCharactersPageAction(page);
  }, [page]);

  const characterInfoHandler = (id: number) => {
    history.push(`/character/${id}`);
  };
  
  return (
    <>
      {metaCharacters.count === 0 && <Redirect to={RouteConst.Root} />}
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
            characterInfo={characterInfoHandler}
            id={char.id} 
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

export default Characters;
