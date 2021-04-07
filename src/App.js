import './App.css';
import LandingPage from './components/LandingPage/';
import ArtistDetail from './components/ArtistDetail';
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/artist/:id" component={ArtistDetail} />
        </BrowserRouter>
  );
}

export default App;
