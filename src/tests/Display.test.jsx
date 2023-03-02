import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../components/Display';

describe('Display', () => {
  const values = {
    total: null,
    next: null,
    operator: null,
  };
  it('The button should have the name =', () => {
    render(<Display value={(values.total || values.next || 0)} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
