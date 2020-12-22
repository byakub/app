import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  height: 500px;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 3fr 10fr 3fr;
  font-size: 1.2rem;
  background-image: url(https://img4.goodfon.com/wallpaper/nbig/1/c1/rick-and-morty-rick-space-morty-rik-morti-kosmos-zvezdy-glaz.jpg), radial-gradient(gray 1px, transparent 1px);
  background-size:auto auto, 50px 50px;
  background-blend-mode: darken;  

  .navbar-sitename{
    padding-left: 2rem;
    color: #f0e14a;
    font-weight: bold;
  }

  .navbar-logo{
    text-align: center;

    .logo {
      max-height: 20%;
      max-width: 20%;
    }
  }

  .navbar-links{
    .link{
      padding: 0 1.5rem;
      color: #f0e14a;
      font-weight: bold;
    }
  }

`;

export const Navbar: React.FC = () => {
  return(
    <Wrapper>
      <div className="navbar-sitename">
        Rick and Morty
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img className="logo" alt="" src="https://img2.pngio.com/download-s-i-turned-myself-into-a-stencil-morty-im-stencil-rick-and-morty-black-and-white-png-1013_1285.png"/>
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="link" to="/characters">characterS</Link>
      </div>
    </Wrapper>
  );
};
