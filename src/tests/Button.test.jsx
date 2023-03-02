import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('The button should have the name =', () => {
    render(<Button name="=" handleClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.innerHTML).toBe('=');
  });
});
