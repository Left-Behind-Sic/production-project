import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
  test('test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('theme clear', () => {
    render(<Button variant='clear'>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
