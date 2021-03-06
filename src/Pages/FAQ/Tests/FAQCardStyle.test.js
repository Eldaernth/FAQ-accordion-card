import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import FAQCard from '../Components/FAQCard';

afterEach(cleanup);

it('renders images', () => {
  render(<FAQCard />);
  const images = document.querySelectorAll('img');
  expect(images.length).toBe(8);
  expect(images[0].alt).toContain('illustration of a woman online');
  expect(images[2].alt).toContain('background of woman illustration online');
  expect(images[0].src).toContain('illustration-woman-online');
  expect(images[2].src).toContain('bg-pattern');
});

it('renders FAQ title', () => {
  render(<FAQCard />);
  expect(screen.getByRole('heading', { name: 'FAQ' })).toBeInTheDocument();
});

it('renders list elements', () => {
  render(<FAQCard />);
  const listElements = document.querySelectorAll('li');
  expect(listElements.length).toBe(5);
});

it('renders element after click', () => {
  render(<FAQCard />);
  const downArrow = screen.getAllByAltText('down arrow');
  fireEvent.click(downArrow[0]);
  expect(
    screen.getByText(/You can invite up to 2 additional users on the Free plan/)
  ).toBeInTheDocument();
});
