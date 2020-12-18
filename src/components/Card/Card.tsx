import React from 'react';
import styled from 'styled-components';

import { Card as AntCard }  from 'antd';

const { Meta } = AntCard;

const Wrapper = styled.div`
  
`;

interface ICardProps {
  name: string;
  photo: string;
  link: string;
}

export const Card: React.FC<ICardProps> = ({ name, photo, link }) => (
  <Wrapper>
    <AntCard
      hoverable={true}
      style={{ width: 240 }}
      cover={<img alt={name} src={photo} />}
    >
      <Meta title={name} description={link} />
  </AntCard>
  </Wrapper>
);
