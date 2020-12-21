import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "MS Sans Serif", Tahoma, Verdana, Segoe, sans-serif; 
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
  background: #f0e14a;
  color: #44281d;

  .card-title{
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    height: 1.3rem;
    display: block;
    text-align: center;
    background: #83d2e4;
    color: #44281d;
    font-size: 1rem;
    font-weight: 500;
    height:100%;
  }

  .card-body{
    display:grid;
    grid-template-columns: 5fr 3fr;
    align-items: center;
    height: 100%;
    
    .card-info{
      
      .card-info-body{
        line-height: 1.35;
        padding-left: 1rem;
        font-size: 1rem;

        h2{
          font-size: 1rem;
          font-weight: bold;
        }

        h3{
          padding-left:1rem;
          font-size: 0.7rem;
        }
      }
    }

    .card-image{
      .image{
        max-width: 100%;
      }
    }
  }
`;

interface ICardProps {
  name: string;
  photo: string;
  status: string;
  location: string;
  species: string;
  episode: number;
  id: number;
  characterInfo: (id: number) => void;
}

export const Card: React.FC<ICardProps> = ({ name, photo, status, location, episode, id, species, characterInfo }) => (
  <Wrapper onClick={() => characterInfo(id)}>
    <div className="card-title">{name}</div>
    <div className="card-body">
      <div className="card-info">
        <div className="card-info-body">
          <h2>{status} - {species}</h2>
          <h2>Last known location:</h2>
          <h3>{location}</h3>
          <h2>Count of episodes:</h2>
          <h3>{episode}</h3>
        </div>
      </div>
      <div className="card-image">
        <img className="image" src={photo} alt={name}/>
      </div>
    </div>
  </Wrapper>
);
