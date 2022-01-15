import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import avatar1 from '../../stories/assets/avatar1.svg';
import styled from 'styled-components';


interface UserCardProps {
  variant?: 'rounded' | 'square';
  src: string;
  alt: string;
  avatarWidth: string;
  avatarHeight: string;
  name: string;
}

const Card = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px 5px 10px;
  border-radius: 4px;
  box-shadow: 0 10px 6px -6px #ddd;
  width: 300px;
`;

export const UserCard: React.FC<UserCardProps> = ({
  src,
  variant,
  alt,
  name,
  avatarWidth= '25',
  avatarHeight= '25',
  ...props
}) => {
  return (
    <>
      <Card>
        <Avatar
          src={avatar1}
          alt={alt}
          variant={variant}
          width={avatarWidth}
          height={avatarHeight}
        />
        <span {...props}>{name}</span>
      </Card>
    </>
  );
};