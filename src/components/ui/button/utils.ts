import colors from "../../../helperFunctions/colors";

export const getIconSize = (iconSize?: string) => {
    switch (iconSize) {
        case 'xs':
            return 15;
        case 'sm':
            return 20;
        case 'md':
            return 24;
        case 'lg':
            return 32;
        case 'xl':
            return 36;
        default:
            return 24;
    }
};

export const buttonSize = (size: string) => {
    switch (size) {
        case 'sm':
            return 'px-3 py-2';
        case 'md':
            return 'px-6 py-3';
        case 'xs':
            return 'px-[11px] py-[2px]';
        case 'lg':
            return 'px-[30px] py-[3px]'
        default:
            return 'px-4 py-2';
    }
};


export const buttonTheme = (theme: string) => {
    switch (theme) {
        case 'primary':
            return {
                backgroundColor: colors.black_300,
                color: 'white'
            };
        case 'secondary':
            return {
                backgroundColor: colors.grey_50,
                color: colors.black_300,
            };

        case 'tertiary':
            return {
                backgroundColor: 'transparent',
                color: colors.grey_400,
            };
        case 'primary-tertiary':
            return {
                color: colors.black_300,
                borderColor: 'rgba(239, 241, 246, 1)',
                border: '1px solid',
            };
        case 'disabled':
            return {
                color: 'white',
                cursor: 'not-allowed',
                backgroundColor: colors.grey_100
            };

        default:
            return {}
    }
};