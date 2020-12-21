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
  species: string;
  id: number;
  characterInfo: (id: number) => void;
}

export const Card: React.FC<ICardProps> = ({ name, photo, status, species, id, characterInfo }) => (
  <Wrapper onClick={() => characterInfo(id)}>
    <div className="card-title">{name}</div>
    <div className="card-body">
      <div className="card-info">
        <div className="card-info-body">
          Status : {status}
          <br/>
          Race : {species}
          <br/>
          Race : {species}
        </div>
      </div>
      <div className="card-image">
        <img className="image" src={photo} alt={name}/>
      </div>
    </div>
  </Wrapper>
);
