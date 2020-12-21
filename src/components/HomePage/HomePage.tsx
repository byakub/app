import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  .about{
    color: #44281d;
    padding-bottom: 1rem;
    
    h2 {
      text-align: center;
      font-size: 2rem;
      padding: 2rem 0;
    }

    p {
      text-align: center;
      max-width: 60rem;
      margin: 0 auto;
      padding: 2rem 0;
    }

    img{
      display: block;
      margin: 0 auto;
    }
  }
`;

interface ICardProps {
  
}

export const HomePage: React.FC<ICardProps> = () => {
  return(
    <Wrapper>
      <div className="about">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sequi.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          eaque autem illum officia, nulla sint, nobis, laborum tenetur rem
          libero cupiditate cumque in possimus incidunt explicabo omnis commodi
          inventore assumenda.
        </p>
        <img src="https://img1.looper.com/img/gallery/rick-and-morty-season-5-release-date-episodes-cast-and-plot/intro-1581540684.jpg" alt="" />
        </div>
    </Wrapper>
  );
};
