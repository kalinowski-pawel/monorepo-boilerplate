import React from 'react';
import { Avatar } from '@mui/material';

interface SimpleAvatarProps {
	variant?: 'rounded' | 'squared';
	src: string;
	alt: string;
	width: string;
	height: string;
}

export const SimpleAvatar: React.FC<SimpleAvatarProps> = ({
	src,
	variant = 'rounded',
	alt,
	...props
}) => {
	return (
		<>
			{src ? (
					<Avatar
						src={src}
						alt={alt}
						{...props}
					/>
				)
				: (
					<Avatar
						{...props}
					>
						{alt.substring(0, 1)}
					</Avatar>
				)
			}
		</>
	);
};