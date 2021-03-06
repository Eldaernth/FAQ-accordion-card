import style from '@emotion/styled';

export const mobileWidth = '375px';
export const desktopWidth = '1440px';

export const questionColor = 'hsl(238, 29%, 16%)';
export const answerColor = 'hsl(240, 6%, 50%)';
export const hoverColor = 'hsl(14, 88%, 65%)';

export const gradientStartColor = 'hsl(273, 75%, 66%)';
export const gradientEndColor = 'hsl(240, 73%, 65%)';

export const dividerColor = 'hsl(240, 5%, 91%)';

export const fontSize = '12px';
export const normalFontWeight = '400';
export const strongFontWeigth = '700';
export const fontFamily = 'Kumbh Sans';

export const AppStyle = style.div`
    width:100%;
    min-height: 100vh; 
    padding: 0px;
    margin:0px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, ${gradientStartColor},${gradientEndColor});
    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-weight: ${normalFontWeight};
`;
