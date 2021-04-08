import './App.css';
import LandingPage from './components/LandingPage/';
import ArtistEvents from './components/ArtistEvents';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './js/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/artist/:id" component={ArtistEvents} />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
