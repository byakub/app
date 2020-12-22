import React, { useEffect } from 'react';

import moment from 'moment';

import {
  HandleCharacterAction,
  ICharacter,
} from 'store';

import styled from 'styled-components';

import { DateFormatConst } from 'consts';

import { useHistory, useParams  } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  bottom: 400px;
  padding: 0 1rem;
  min-height:20rem;

  .characters-button{
    display: block;
    margin-left: 1rem;
    background: #44281d;
    color: #f0e14a;
    font-size: 1rem;
    font-weight: 400;
  }

  .characters-button:hover {
    background: #f0e14a;
    color: #44281d;
  }
  
  .profile-body{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    
    .profile-image{
    text-align: center;
      
      h1{
        font-size: 3rem;
        max-width: 100%;
        font-weight: 800;
      }

      img{
        border: 2px solid white;
        max-width: 100%;
        height: auto;
      }
  }
  .profile-info{
    align-self: center;
    justify-self: center;
    line-height: 1;
    padding-top: 4rem;
    color: #44281d;

    h2{
      
      font-weight: 800;
      padding: 0.3rem 0;
    }

    h3{
      padding-left: 1rem;
      font-weight: 600;
    }
  }
  }
  
`;

interface ICharacterProfile {
  character: ICharacter;
  handleCharacterAction: HandleCharacterAction;
}

interface IParamTypes {
  id: string;
}

export const CharacterProfile: React.FC<ICharacterProfile> = props => {

  const { id } = useParams<IParamTypes>();

  const history = useHistory();

  const backPageHandler = () => {
    history.goBack();
  };

  const {
    character,
    handleCharacterAction
  } = props;

  useEffect(() => {
    handleCharacterAction(Number(id));
    window.scrollTo(0, 0);
  }, [id]);
  
  return (
    <Wrapper>
    <button onClick={() => backPageHandler()} className="characters-button">go bacK</button>
    <div className="profile-body">
      <div className="profile-image">
        <h1>{character.name}</h1>
        <img alt="" src={character.image}/>
      </div>
      <div className="profile-info">
        <h2>Status:</h2>
        <h3>{character.status}</h3>
        <h2>Race:</h2>
        <h3>{character.species}</h3>
        <h2>Sex:</h2>
        <h3>{character.gender}</h3>
        <h2>Born on:</h2>
        <h3>{character.origin.name}</h3>
        <h2>Last known location:</h2>
        <h3>{character.location.name}</h3>
        <h2>Seen in episodes:</h2>
        {/* {character.episode.map((episode, index) => {
          return(
            <h3 key={index}>{episode}</h3>
          );
        })} */}
        <h2>Created on: </h2>
        <h3>{moment(character.created).format(DateFormatConst.default)}</h3>
      </div>
    </div>
  </Wrapper>
  );
};

export default CharacterProfile;
