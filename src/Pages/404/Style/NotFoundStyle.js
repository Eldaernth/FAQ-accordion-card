import style from '@emotion/styled';
import { FAQCardWrapper, FAQCardStyle } from '../../FAQ/Style/FAQCardStyle';

export const NotFoundWrapper = style(FAQCardWrapper)``;

export const NotFoundCard = style(FAQCardStyle)`
    & > h1 {
        margin:1.5rem 4rem;
    }
    & > p {
        margin:1.5rem 4rem;
    }
    & > a {
        margin:1.5rem 4rem;
    }
`;
