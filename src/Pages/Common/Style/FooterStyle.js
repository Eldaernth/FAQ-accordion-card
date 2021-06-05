import style from '@emotion/styled';
import { questionColor, gradientEndColor } from '../../../CssValues';

export const FooterStyle = style.footer`
    width:100%;
    background-color:${gradientEndColor};
    text-align:center; 
`;
export const Link = style.a`
    color:${questionColor};
`;
