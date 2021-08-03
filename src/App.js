import './App.css';
import ArtistEvents from './components/Passengers';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './js/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Passengers from './components/Passengers';
import Airlines from './components/Airlines';
import Settings from './components/Settings';

// Functional component App
// Main Entry point of React application defining the routes and corresponding components to load

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/passengers" component={Passengers} />
        <Route exact path="/airlines" component={Airlines} />
        <Route exact path="/settings" component={Settings} />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
