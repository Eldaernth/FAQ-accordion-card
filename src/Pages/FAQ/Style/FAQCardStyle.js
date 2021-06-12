import style from '@emotion/styled';
import {
  dividerColor,
  answerColor,
  questionColor,
  desktopWidth,
  fontSize,
  strongFontWeigth,
  hoverColor,
} from '../../../cssValues';

export const ImgWrapper = style.div`
    display:flex;
    justify-content:center;
    position:absolute;
    @media screen and (min-width:${desktopWidth}){
        position:relative;
    }
`;

export const WomanPlusBgWrapper = style.div`
    @media screen and (min-width:${desktopWidth}){
        height:655px;
        position:relative;
        overflow:hidden;
    }
`;

export const WomanIllustration = style.img`
    position: relative;
    top:-7rem;
    left:-1rem;
    z-index: 2;
    @media screen and (min-width:${desktopWidth}){
        top:8rem;
        left:-5rem;
    }
`;

export const IllustrationBox = style.img`
    position:absolute;
    z-index:3;
    @media screen and (min-width:${desktopWidth}){
        top:16.5rem;
        left:-5.7rem;
    }
`;

export const BgPattern = style.img`
    position:absolute;
    top:0rem;
    left:1rem;
    z-index:1;
    @media screen and (min-width:${desktopWidth}){
        top:-14rem;
        left:-36rem;
    }
`;
export const FAQWrapper = style.div`
    position:relative;
    width:100%;
    text-align:center;
    margin-top:6.5rem;
    @media screen and (min-width: ${desktopWidth}){
        text-align:left;
        margin:3.5rem 0 0 1.5rem;
    }
`;

export const FAQCardWrapper = style.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: calc(${fontSize} + 0.5vw);
`;

export const FAQCardStyle = style.div`
    max-height:1000px;
    margin:10rem 1.5rem;
    display: flex;
    flex-direction:column;
    align-items: center; 
    background-color: white;
    width:85%; 
    border-radius:4%;
    box-shadow: 0 16px 24px -4px  ${questionColor};
    @media screen and (min-width: ${desktopWidth}) {
        width:70%;
        flex-direction:row;
        justify-content: center;
      }
`;

export const FAQList = style.ul`
    list-style-type:none;
    text-align:left;
    padding-inline-start:0px; 
    margin:0 1rem 2.5rem 1rem;
    @media screen and (min-width: ${desktopWidth}){
        margin: 0 6rem 4rem 0;
    }
`;

export const FAQListElement = style.li`
    padding: 1em 1em 1em 0;
    margin-bottom:0.5rem;
    border-bottom: 1px solid ${dividerColor};
    & > p {
        color:${answerColor};
    }
`;

export const QuestionWrapper = style.div`
    display: flex;
    justify-content: space-between; 
    text-align:left;
    &:focus-within{
        font-weight:${strongFontWeigth};
    }
    & > button {
        cursor:pointer;
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
        color: ${questionColor};
        &:hover{
            color:${hoverColor};
        }
    }
`;
