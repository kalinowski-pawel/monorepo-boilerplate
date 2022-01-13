import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import avatar1 from '../../stories/assets/avatar1.svg';
import styled from 'styled-components';


interface UserCardProps {
  variant?: 'rounded' | 'square';
  src: string;
  alt: string;
  width: string;
  height: string;
  name: string;
}

const Card = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const UserCard: React.FC<UserCardProps> = ({
  src,
  variant,
  alt,
  name,
  ...props
}) => {
  return (
    <>
      <Card>
        <Avatar
          src={avatar1}
          alt={alt}
          variant={variant}
          width='25'
          height='25' />
        <span {...props}>{name}</span>
      </Card>
    </>
  );
};