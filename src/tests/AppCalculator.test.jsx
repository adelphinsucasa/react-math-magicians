import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';
import calculate from '../logic/calculate';
import AppCalculator from '../components/AppCalculator';

describe('Testing operate (Add, Substract, Multiply, Divide)', () => {
  it('9 + 1 be 10', () => {
    expect(operate(9, 1, '+')).toBe('10');
  });

  it('7 - 9 be -2', () => {
    expect(operate(7, 9, '-')).toBe('-2');
  });

  it('7 x 6 be 42', () => {
    expect(operate(7, 6, 'x')).toBe('42');
  });

  it('25 ÷ 5 be 5', () => {
    expect(operate(25, 5, '÷')).toBe('5');
  });

  it('3 / 0 to be Cannot divide by 0.', () => {
    expect(operate(3, 0, '÷')).toBe('Cannot divide by 0.');
  });
});

describe('Testing calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  it('AC to be null', () => {
    obj.next = 88;
    const result = calculate(obj, 'AC');
    expect(result).toMatchObject({ total: null, next: null, operation: null });
  });
  it('AC to be null', () => {
    obj.next = 88;
    const result = calculate(obj, 'AC');
    expect(result).toMatchObject({ total: null, next: null, operation: null });
  });
  it('= is pressed with all the fields filled, it should return total with the operation executed', () => {
    obj.next = '12';
    obj.operation = '+';
    obj.total = '88';
    const result = calculate(obj, '=');

    expect(result.total).toBe('100');
  });
  it('3 is pressed with next already have 12, it should finih as 123', () => {
    obj.next = '12';
    obj.operation = null;
    obj.total = null;
    const result = calculate(obj, '3');

    expect(result.next).toBe('123');
  });
});

describe('AppCalculator', () => {
  it('renders AppCalculator Component', () => {
    render(<AppCalculator />);
    expect(screen.getByText('AC')).toBeInTheDocument();
  });
});
