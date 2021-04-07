import React from 'react';
import './styles.scss';
import { connect } from "react-redux";
import { getArtistEvents } from '../../js/actions'


class ArtistEvents extends React.Component {
    constructor(props){
      super(props);
      this.state={searched_text:''}
    }

    componentDidMount = () => {

    }

    render(){
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
}
const mapDispatchToProps = dispatch => {
  return {
    getArtistEvents: payload => dispatch(getArtistEvents(payload)),
  }
}
const mapStateToProps = state => {
  return {
    artist: state.artist,
    artist_events: state.artist_events
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistEvents);
