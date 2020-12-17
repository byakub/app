import React, { useEffect } from "react";

import { ICharacter } from 'store'

export const Characters: React.FC<any> = props => {

  const {
    handleInitCharactersAction,
    handleCharactersPageAction,
    characters
  } = props

  console.log(characters)
  useEffect(() => {
    handleInitCharactersAction();
  }, []);
  
  return (
    <>
      {characters.map((char: ICharacter) => {
        return (
          <div key={char.id}>
            <p>{char.name}</p>
            <img src={char.image}/>
            <a href={char.url}>link</a>
          </div>
        )
      })}
      <button onClick={ ()=> {handleCharactersPageAction()} }>Next</button>
    </>
  )
};

export default Characters;
