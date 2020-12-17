import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ImmutableArray, ImmutableObject } from 'seamless-immutable';

import { Pagination } from 'antd';

import { Card } from 'components'

import { 
  ICharacter,
  ICharactersMeta, 
  HandleCharactersPageAction,
} from 'store'

interface ICharacters {
  characters: ImmutableArray<ICharacter>,
  metaCharacters: ICharactersMeta,
  handleCharactersPageAction: HandleCharactersPageAction,
}

export const CharactersPages: React.FC<ICharacters> = props => {
  const {
    handleCharactersPageAction,
    characters,
    metaCharacters
  } = props;

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    handleCharactersPageAction(page);
  }, [page]);


  return (
    <>
      <Link to="/">To Home Page</Link>
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
      <Pagination 
        current={page} 
        onChange={(page)=>setPage(page)} 
        total={metaCharacters.count}
        defaultPageSize={metaCharacters.items}
      />
    </>
  )
};

export default CharactersPages;
