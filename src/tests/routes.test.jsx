import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Root from '@/routes/root';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Routes components', () => {
  let topbar;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
    );
    topbar = screen.getByText(/home/i);
  });

  it('Should test if routes (topbar) component is inside the document', () => {
    expect(topbar).toBeInTheDocument();
  });

  it('Should render a snapshot of the topbar component', () => {
    expect(topbar).toMatchSnapshot();
  });
});