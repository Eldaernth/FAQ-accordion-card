import React, { useState } from 'react';
import { fAQData } from '../../../data';
import * as Style from '../Style/FAQCardStyle';
import bgPatternM from '../../../../images/bg-pattern-mobile.svg';
import bgPatternD from '../../../../images/bg-pattern-desktop.svg';
import illustrationBoxD from '../../../../images/illustration-box-desktop.svg';
import illWomanOnlineM from '../../../../images/illustration-woman-online-mobile.svg';
import illWomanOnlineD from '../../../../images/illustration-woman-online-desktop.svg';
import iconArrowDown from '../../../../images/icon-arrow-down.svg';

export default function FAQCard() {
  const [faqData, setFaqData] = useState(fAQData);

  const changeFaqData = (question) => {
    setFaqData((prev) => [
      ...prev.map((elem) => {
        if (elem.question === question.question) {
          return { ...elem, toggled: !elem.toggled };
        }
        return { ...elem, toggled: false };
      }),
    ]);
  };

  const toggleQuestion = (question) => {
    changeFaqData(question);
  };
  const toggleOnKeyDown = (e, question) => {
    e.stopImmediatePropagation();
    if (e.key === 'Enter') {
      changeFaqData(question);
    }
  };

  console.log(faqData);

  return (
    <Style.FAQCardWrapper>
      <Style.FAQCardStyle>
        <Style.ImgWrapper>
          <div>
            <picture>
              <source media="(min-width: 1440px)" srcSet={illWomanOnlineD} />
              <Style.WomanIllustration
                src={illWomanOnlineM}
                alt="illustration of a woman online"
              />
            </picture>
            <picture>
              <source media="(min-width: 1440px)" srcSet={illustrationBoxD} />
              <Style.IllustrationBox src="data:" alt="" />
            </picture>
            <picture>
              <source media="(min-width: 1440px)" srcSet={bgPatternD} />
              <Style.BgPattern
                src={bgPatternM}
                alt="background of woman illustration online"
              />
            </picture>
          </div>
        </Style.ImgWrapper>
        <Style.FAQWrapper>
          <h1>FAQ</h1>
          <Style.FAQList>
            {faqData.map((row) => (
              <Style.FAQListElement key={row.id}>
                <Style.QuestionWrapper>
                  <span>{row.question}</span>
                  <button
                    type="button"
                    onClick={() => toggleQuestion(row)}
                    onKeyDown={(e) => toggleOnKeyDown(e, row)}
                  >
                    <img src={iconArrowDown} alt="down arrow" />
                  </button>
                </Style.QuestionWrapper>
                {row.toggled && <p>{row.answer}</p>}
              </Style.FAQListElement>
            ))}
          </Style.FAQList>
        </Style.FAQWrapper>
      </Style.FAQCardStyle>
    </Style.FAQCardWrapper>
  );
}
