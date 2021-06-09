import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundWrapper, NotFoundCard } from '../Style/NotFoundStyle';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundCard>
        <h1>404 Not Found</h1>
        <p>This page doesn't exist yet or never will</p>
        <Link to="/">
          <button type="button">Back to home</button>
        </Link>
      </NotFoundCard>
    </NotFoundWrapper>
  );
}
