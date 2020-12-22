import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top:-350px;
  height: 3rem;
  padding-top: 1rem;
  text-align: center;
  justify-content: content;

  .footer-info{
    line-height: 2;
    padding: 1rem 8rem;
    color: #f0e14a;
    background-color: #44281d;
  }

  .footer-cp{
    background-color: #f0e14a;
    color: #44281d;
  }

`;

export const Footer: React.FC = () => {
  return(
    <Wrapper>
      <div className="footer-info">
      I mixed in some praying mantis DNA. 
      You know a praying mantis is the exact opposite of a vole, Morty? 
      They mate once and then bluergh cut each other's heads off. 
      I turned myself into a pickle, Morty! Boom! Big reveal! I'm a pickle!
      </div>
      <div className="footer-cp">
        &copy; 2020 Copyright. All right reserved.
      </div>
    </Wrapper>
  );
};
