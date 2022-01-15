import React from 'react';
import { Avatar as AvatarMUI } from '@mui/material';
import styled from 'styled-components';

interface AvatarProps {
  variant?: 'rounded' | 'square';
  src: string;
  alt: string;
  width: string;
  height: string;
}

const AvatarGH = styled.div`
  padding: 5px;
`;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  variant,
  alt,
  ...props
}) => {
  return (
    <>
      <AvatarGH>
        {src ? (
            <AvatarMUI
              src={src}
              alt={alt}
              variant={variant}
              {...props}
            />
          )
          : (
            <AvatarMUI
              src={src}
              alt={alt}
              variant={variant}
              {...props}
            >
              {alt.substring(0, 1)}
            </AvatarMUI>
          )
        }
      </AvatarGH>
    </>
  );
};