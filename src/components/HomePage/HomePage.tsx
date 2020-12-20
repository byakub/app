import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  .showcase {
  min-height: 20rem;
  padding-top: 1rem;
  background-color: #97ce4c;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  color: #44281d;
  border-bottom: 2px solid black;
  }

  .showcase-info h2 {
  margin: 2rem;
  }

  .showcase-info p {
  margin: 2rem;
  text-indent: 3rem;
  text-align: justify;
  }

  .showcase-img {
  align-self: center;
  padding: 0 10px;
  justify-self: center;
  }
  
  .about{
    background-color: #f0e14a;
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
      <div className="showcase">
        <div className="showcase-img">
          <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="" />
        </div>
        <div className="showcase-info">
          <h2>RICK AND MORTY FAN SITE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus consequuntur consectetur sunt eaque! Quibusdam, 
            vel voluptas omnis officia tempore doloribus blanditiis ea 
            illo perferendis ullam nemo sunt dolorem consequuntur ipsum 
            quas maiores ex ut? Non numquam veniam hic voluptate quis incidunt 
            quia corrupti modi iure? Corporis, ea voluptatibus? Necessitatibus 
            aspernatur blanditiis distinctio et libero, doloremque esse quisquam 
            eum iusto doloribus, tempora aperiam ut voluptate animi tenetur cum? 
            Porro a fuga maiores maxime ducimus soluta expedita doloremque laboriosam! 
            Consequuntur expedita sint necessitatibus ducimus, sit ipsam harum, 
            ipsa tempore commodi doloremque quisquam.
          </p>
        </div>
      </div>
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
