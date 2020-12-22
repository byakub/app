import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ImmutableArray } from 'seamless-immutable';
import styled from 'styled-components';

import { Card } from 'components';

import { 
  HandleInitCharactersAction,  
  ICharacter,
} from 'store';

interface ICharacters {
  mainCharacters: ImmutableArray<ICharacter>;
  handleInitCharactersAction: HandleInitCharactersAction;
}

const Wrapper = styled.div`
  position: relative;
  bottom: 350px;

  .main{
    color: #44281d;
    padding-bottom: 1rem;
    
    h2 {
      text-align: center;
      font-size: 3rem;
      padding: 2rem 0;
    }

    p {
      text-align: center;
      max-width: 60rem;
      margin: 0 auto;
      padding: 2rem 0;
      font-size: 1.5rem;
      font-weight:500;
    }

    img{
      display: block;
      margin: 0 auto;
    }
  }
  
  .characters-button{
    display: block;
    margin: 1rem auto;
    background: #44281d;
    color: #f0e14a;
    font-size: 1rem;
    font-weight: 400;
  }

  .characters-button:hover {
    background: #f0e14a;
    color: #44281d;
  }

  .info-text{
    text-align: center;
  }
`;

const Cards = styled.div`
  padding: 1rem;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;

export const HomePage: React.FC<ICharacters> = props => {
  const {
    mainCharacters,
    handleInitCharactersAction,
  } = props;

  useEffect(() => {
    handleInitCharactersAction();
    window.scrollTo(0, 0);
  }, []);
  
  const history = useHistory();
  const characterInfoHandler = (id: number) => history.push(`/character/${id}`);
  const charactersPageHandler = () => history.push('/characters/');

  return (
    <Wrapper>
      <div className="main">
        <h2>
          I'm the Devil, what should I do when I fail?
        </h2>
        <p>
          Cool. Just stay in the driveway; the kill-bots are live, 
          and I took you off the whitelist. If anything happened to you 
          I would kill myself! I love you bad, bobo! It's a dream, Morty!
        </p>
        <img 
          src="https://img1.looper.com/img/gallery/rick-and-morty-season-5-release-date-episodes-cast-and-plot/intro-1581540684.jpg" 
          alt="" 
        />
      </div>
      <Cards>
      {mainCharacters.map(character => 
         <Card 
          key={character.id}
          characterInfo={characterInfoHandler}
          id={character.id} 
          name={character.name} 
          photo={character.image} 
          status={character.status}
          location={character.location.name}
          species={character.species}
          episode={character.episode.length}
         />
      )}
      </Cards>
      <button  
        onClick={() => { charactersPageHandler(); }} 
        className="characters-button"
      >
          Go to all characters
      </button>
      <div className="info-text">
        Then I used my dream inceptors to put the two of us inside Snuffles' dream. 
        You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.
      </div>
      
    </Wrapper>
  );
};

export default HomePage;
