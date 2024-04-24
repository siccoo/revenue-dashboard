import React, { ReactNode, MouseEventHandler } from 'react';
import { buttonSize, buttonTheme, getIconSize } from './utils';

interface ButtonProps {
    theme?: 'primary' | 'secondary' | 'tertiary' | 'primary-tertiary' | 'disabled';
    icon?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    loading?: boolean;
    className?: string
    size?: 'sm' | 'md' | 'xs' | 'lg';
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any
    iconRight?: string
    children: React.ReactNode;
}

const Button = ({
    theme, children, icon, onClick,
    loading = false, disabled = false,
    className, size = 'md', iconSize = 'sm', 
    style, iconRight
}: ButtonProps) => {
    const iconElement: ReactNode = icon && <img src={`${icon}`} alt='' width={getIconSize(iconSize)} height={getIconSize(iconSize)} />;
    const iconRightElement: ReactNode = iconRight && <img src={`${iconRight}`} alt='' width={getIconSize(iconSize)} height={getIconSize(iconSize)} />;

    return (
        <button
            className={`flex items-center justify-center transition-all ease-in text-center gap-2 outline-none disabled:cursor-not-allowed
              ${className} ${buttonSize(size)}`}
            onClick={onClick}
            disabled={disabled || loading}
            style={theme ? buttonTheme(theme) : style}
        >
            {iconElement}
            {children}
            {iconRightElement}
        </button>
    );
};

export default Button;
