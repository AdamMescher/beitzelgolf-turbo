import { render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from './index';

expect.extend(toHaveNoViolations);

describe('Home page', () => {
  it('Should render without errors', async () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
  it('Should render without axe a11y violations', async () => {
    render(<Home />);
    expect(await axe(screen.getByTestId('home'))).toHaveNoViolations();
  });
});
