import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@app/page.tsx';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText('하루한냥');
    expect(heading).toBeInTheDocument();
  });
});
