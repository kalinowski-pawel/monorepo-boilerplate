import React from 'react';
import { Button } from '@mui/material';

interface SimpleButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant: 'contained' | 'outlined';
  label: string;
  onClick?: () => void;
}

export const SimpleButton = ({
  size = 'medium',
  color = 'primary',
  backgroundColor,
  variant,
  label,
  ...props
}: SimpleButtonProps) => {
  return (
    <Button
      variant={variant}
      style={{ backgroundColor }}
      color={color}
      {...props}
    >
      {label}
    </Button>
  );
};
