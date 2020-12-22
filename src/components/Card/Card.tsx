import React from 'react';
import styled from 'styled-components';

interface IStatusProps {
  readonly status: string;
}

const Wrapper = styled.div<IStatusProps>`
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

        .status{
          line-height:1;

          .status-icon{
            padding-right: .5rem;
            font-size: 2.5rem;
            color: ${props => 
              (props.status === 'Alive' ? '#55cc44' : props.status === 'Dead' ? '#d63d2e' : '#9e9e9e')};
            vertical-align:middle;
          }

          .status-text{
            vertical-align:middle;
            font-weight: bold;
          }
        }
      }
    }

    .card-image{
      .image{
        max-width: 100%;
      }
    }
  }
  
  .card-button{
    display: block;
    text-align: center;
    background: #f0e14a;
    color: #44281d;
    font-size: 1rem;
    font-weight: 500;
    height:100%;
    width:100%;
  }

  .card-button:hover {
    background: #44281d;
    color: #f0e14a;
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
  <Wrapper status={status} >
    <div className="card-title">{name}</div>
    <div className="card-body">
      <div className="card-info">
        <div className="card-info-body">
          <div className="status">
            <span className="status-icon">
              •
            </span>
            <span className="status-text">
              {status} - {species}
            </span>
          </div>
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
    <button onClick={() => characterInfo(id)} className="card-button">All info about {name}</button>
  </Wrapper>
);
