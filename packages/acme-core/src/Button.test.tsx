import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('Should render without errors', () => {
    render(<Button>button text</Button>);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Button>button text goes here</Button>);
    expect(await axe(screen.getByRole('button'))).toHaveNoViolations();
  });
});
