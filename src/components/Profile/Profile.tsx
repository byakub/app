import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  bottom: 400px;
  padding: 0 1rem;
  min-height:20rem;

  
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
        {character.episode.map((episode, index) => {
          return(
            <h3 key={index}>{episode}</h3>
          );
        })}
        <h2>Created : </h2>
        <h3>{character.created}</h3>
      </div>
    </div>
  </Wrapper>
);
