import { cleanup, screen } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    const teste = screen.queryByText('0');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(teste).toBeInTheDocument();
  });
});
