import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../Component/NotFound';

afterEach(cleanup);

it('render 404 header', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  expect(screen.getByRole('heading', { name: '404 Not Found' }));
});

it('render 404 header', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  expect(screen.getByRole('button', { name: 'Back to home' }));
});
