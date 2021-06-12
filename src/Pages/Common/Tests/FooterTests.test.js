import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

it('should find links text', () => {
  render(<Footer />);

  expect(screen.getByText(/Frontend Mentor/)).toBeInTheDocument();
  expect(screen.getByText(/Joó Norbert/)).toBeInTheDocument();
});
