import { render, screen } from '@testing-library/react';
import ArtistEvents from './index';
import store from '../../js/store'
test('renders learn react link', () => {
  render(<ArtistEvents store={store}/>);
  const linkElement = screen.getByText('< Back to Results');
  expect(linkElement).toBeInTheDocument();
});
