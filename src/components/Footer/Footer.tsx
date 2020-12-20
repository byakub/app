import React from 'react';
import styled from 'styled-components';

import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Wrapper = styled.div`
  height: 3rem;
  padding-top: 1rem;
  text-align: center;
  justify-content: content;

  .footer-info{
    line-height: 2;
    border: 1px dashed red;
    padding: 1rem 8rem;
    color: #f0e14a;
    background-color: #44281d;
  }

  .footer-cp{
    background-color: #f0e14a;
    color: #44281d;
  }

`;

interface ICardProps {
  
}

export const Footer: React.FC<ICardProps> = () => {
  return(
    <Wrapper>
      <div className="footer-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eligendi nostrum laboriosam, quis nulla voluptatem quibusdam voluptatibus 
        animi doloremque fugiat eum sapiente numquam, nesciunt sint necessitatibus.
      </div>
      <div className="footer-cp">
        &copy; 2020 Copyright. All right reserved.
      </div>
    </Wrapper>
  );
};

//<img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"/>
