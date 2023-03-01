import { describe, it, expect } from 'vitest';
import operate from '@/logic/operate';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import AppCalculator from '@/components/AppCalculator'

describe('something truthy and falsy', () => {
  it('9 + 1 be a 10', () => {
    expect(operate(9,1,'+')).toBe('10');
  })

  it('7 x 6 be a 42', () => {
    expect(operate(7,6,'x')).toBe('42');
  })
});

describe('AppCalculator', () => {
    it ('renders AppCalculator Component', () => {
        render(<AppCalculator />)
        expect(screen.getByText('AC')).toBeInTheDocument();
    })
});

