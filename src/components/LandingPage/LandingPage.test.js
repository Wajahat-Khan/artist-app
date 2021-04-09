import { render, screen } from '@testing-library/react';
import LandingPage from './index';
import store from '../../js/store'
test('renders learn react link', () => {
  render(<LandingPage store={store}/>);
  const linkElement = screen.getByPlaceholderText("Search Artist")
  expect(linkElement).toBeInTheDocument();
});
