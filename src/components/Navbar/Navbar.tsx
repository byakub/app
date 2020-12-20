import { createFromIconfontCN } from '@ant-design/icons';

import React from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Wrapper = styled.div`
  
  height: 50px;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 8fr 6fr 1fr;
  font-size: 1.2rem;
  border-bottom: 2px solid black;
  background-color: #97ce4c;
  color: #44281d;
  
  .navbar-logo{
    position: relative;

    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 100%;
      max-width: 100%;
    }
  }

  .navbar-links{
    margin: auto 0;
    
    .link{
      padding: 0 1.5rem;
      color: #44281d;
    }
  }

  .navbar-social{
    margin: auto;
    .social-link{
      padding: 0 3rem;
    }
  }

  .navbar-date{
    margin: auto;
    padding-right:1rem;
  }

`;

interface ICardProps {
  
}

export const Navbar: React.FC<ICardProps> = () => {
  return(
    <Wrapper>
      <div className="navbar-logo">
        <Link to="/">
          <img className="logo" src="https://img2.pngio.com/download-s-i-turned-myself-into-a-stencil-morty-im-stencil-rick-and-morty-black-and-white-png-1013_1285.png"/>
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="link" to="/characters">characterS</Link>
        <Link className="link" to="/about">abouT</Link>
      </div>
      <div className="navbar-social">
        <a className="social-link" target="_blank" href="https://twitter.com">
          <IconFont type="icon-twitter" />
        </a>
        <a className="social-link" target="_blank" href="https://facebook.com">
          <IconFont type="icon-facebook" />
        </a>
      </div>
      <div className="navbar-date">
        <Clock format={'HH:mm:ss'} ticking={true}/>
      </div>
    </Wrapper>
  );
};
