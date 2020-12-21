import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  min-height:20rem;
  display:grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  .profile-image{
    align-self: start;
    justify-self: center;
    
    .img{
      max-width: 100%;
      height: auto;
    }
  }
  .profile-info{
    line-height: 1;

    h1{
      text-align: center;
      font-size: 3rem;
    }

    h2{
      padding: 0.5rem 0;
    }

    h3{
      padding-left: 1rem;
    }
  }
`;

interface IProfileProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  };
}

export const Profile: React.FC<IProfileProps> = ({ character }) => (
  <Wrapper>
    <div className="profile-image">
        <img src={character.image}/>
    </div>
    <div className="profile-info">
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>Born on : {character.origin.name}</h2>
      <h2>Live on : {character.location.name}</h2>
      <h2>Seen in episodes :</h2>
      {character.episode.map((episode, index) => {
        return(
        <h3 key={index}>{episode}</h3>
        );
      })}
      <h2>Created : </h2>
      <h3>{character.created}</h3>
    </div>
  </Wrapper>
);
