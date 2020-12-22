import React, { useEffect } from 'react';

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
  SetCurrentPageAction
} from 'store';

const Wrapper = styled.div`
  position: relative;
  bottom: 350px;
  padding: 1rem;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;

interface ICharacters {
  characters: ImmutableArray<ICharacter>;
  metaCharacters: ICharactersMeta;
  handleCharactersPageAction: HandleCharactersPageAction;
  setCurrentPageAction: SetCurrentPageAction;
}

export const Characters: React.FC<ICharacters> = props => {
  const {
    handleCharactersPageAction,
    characters,
    metaCharacters,
    setCurrentPageAction
  } = props;

  const history = useHistory();

  useEffect(() => {
    handleCharactersPageAction(metaCharacters.page);
    window.scrollTo(0, 0);
  }, [metaCharacters.page]);

  const setPageHandler = (pageNum: number) => {
    setCurrentPageAction(pageNum);
  };

  const characterInfoHandler = (id: number) => {
    history.push(`/character/${id}`);
  };
  
  return (
    <>
      {metaCharacters.count === 0 && <Redirect to={RouteConst.Root} />}
      <Wrapper>
      {characters.map((char: ImmutableObject<ICharacter>) => {
        return (
          <Card 
            key={char.id}
            characterInfo={characterInfoHandler}
            id={char.id} 
            name={char.name} 
            photo={char.image} 
            status={char.status}
            location={char.location.name}
            species={char.species}
            episode={char.episode.length}
          />
        );
      })}
      </Wrapper>
      <Pagination
        current={metaCharacters.page || 1}
        onChange={pageNum => setPageHandler(pageNum)} 
        total={metaCharacters.count}
        defaultPageSize={metaCharacters.items}
        pageSizeOptions={[]}
        style={{
          position: 'relative',
          bottom: '350px',
          textAlign: 'center',
          paddingTop: '1rem'
        }}
      />
    </>
  );
};

export default Characters;
