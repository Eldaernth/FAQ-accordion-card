import React from 'react';
import { FooterStyle, Link } from '../Style/FooterStyle';

export default function Footer() {
  return (
    <FooterStyle>
      Challenge by{' '}
      <Link
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link href="https://dreamjo.bs/en/user/joo-norbert-60943/profile">
        Joó Norbert
      </Link>
      .
    </FooterStyle>
  );
}
