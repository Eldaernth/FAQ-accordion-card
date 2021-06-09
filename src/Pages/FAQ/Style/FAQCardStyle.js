import style from '@emotion/styled';
import { dividerColor, answerColor, questionColor } from '../../../cssValues';

export const ImgWrapper = style.div`
    width:100%;
    height:4rem;
    margin:2rem;
    position: relative;
    top:0
`;

export const WomanIllustration = style.img`
    position: relative;
    top:-142px;
    z-index: 2;
`;

export const BgPattern = style.img`
    position: absolute;
    top:-30px;
    left:28px;
    z-index:1;
`;

export const FAQCardWrapper = style.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const FAQCardStyle = style.div`
    margin:8rem;
    display: flex;
    flex-direction:column;
    align-items: center; 
    background-color: white;
    width:80%; 
    border-radius:6%;
`;

export const FAQWrapper = style.div`
    width:100%;
    text-align:center;
`;

export const FAQList = style.ul`
    list-style-type:none;
    text-align:left;
    padding-inline-start:0px; 
    margin:0 2em;
`;

export const FAQListElement = style.li`
    padding: 1em;
    margin-bottom:2rem;
    border-bottom: 1px solid ${dividerColor};
    & > p {
        color:${answerColor};
    }
`;

export const QuestionWrapper = style.div`
    display: flex;
    justify-content: space-between; 
    text-align:left;
    & > button {
        padding: 0;
        border: none;
        outline: none;
        font: inherit;
        color: inherit;
        background: none;
        &:focus-visible {
            outline:${dividerColor} solid 2px;
        }
        &:focus {
            transform: rotate(180deg);
        }
    },
    & > img {
        object-fit:contain
    },
    & > span {
        color: ${questionColor}
    }
`;
