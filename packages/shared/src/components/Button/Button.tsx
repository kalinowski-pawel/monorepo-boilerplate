import React, {memo} from 'react';
import { Button as ButtonMUI }  from '@mui/material';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant: 'contained' | 'outlined';
  label: string;
  onClick?: () => void;
}

const Button = ({
  size = 'medium',
  color = 'primary',
  backgroundColor,
  variant = 'outlined',
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonMUI
      variant={variant}
      style={{ backgroundColor }}
      color={color}
      size={size}
      {...props}
    >
      {label}
    </ButtonMUI>
  );
};

export default memo(Button);