import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import FAQCard from '../Components/FAQCard';

afterEach(cleanup);

it('renders images', () => {
  render(<FAQCard />);
  const images = document.querySelectorAll('img');
  expect(images.length).toBe(7);
  expect(images[0].alt).toContain('illustration of a woman online');
  expect(images[1].alt).toContain('background of woman illustration online');
  expect(images[0].src).toContain('illustration-woman-online');
  expect(images[1].src).toContain('bg-pattern');
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

it('renders element after keyDown', () => {
  render(<FAQCard />);
  const downArrow = screen.getAllByAltText('down arrow');
  fireEvent.keyDown(downArrow[0], {
    key: 'Enter',
    code: 'Enter',
  });
  expect(
    screen.getByText(
      /You can invite up to 2 additional users on the Free plan./
    )
  ).toBeInTheDocument();
});
