import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import styled from 'styled-components';


interface UserCardProps {
  variant?: 'rounded' | 'square';
  src: string;
  alt: string;
  avatarWidth?: string;
  avatarHeight?: string;
  name: string;
}

const Card = styled.section`
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px 5px 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 300px;
  margin: 10px;
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
          src={src}
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