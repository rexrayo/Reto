import { render, screen } from '@testing-library/react';
import App from './App';
import fizzbuzz from './Fizzbuzz';

test('renders Test FIZZBUZZ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test FIZZBUZZ/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  test('should print buzz if they recieve 5', () => {
    const expected = 'buzz';
    const actual = fizzbuzz(5);
    expect(actual).toBe(expected);
    
  });

  test('should print fizz if they recieve 3', () => {
    const expected = 'fizz';
    const actual = fizzbuzz(3);
    expect(actual).toBe(expected);
    
  });

  test('should print fizz if they recieve a multiple of 3', () => {
    const expected = 'fizz';
    const actual = fizzbuzz(6);
    expect(actual).toBe(expected);
    
  });

  test('should print buzz if they recieve a multiple of 5', () => {
    const expected = 'buzz';
    const actual = fizzbuzz(10);
    expect(actual).toBe(expected);
    
  });

  test('should print fizzbuzz if they recieve a multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const actual = fizzbuzz(15);
    expect(actual).toBe(expected);
    
  });

})