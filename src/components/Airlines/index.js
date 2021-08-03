import React from 'react';
import './styles.scss';
import { connect } from "react-redux";
import { getArtistEvents } from '../../js/actions'
import { Container } from 'react-bootstrap';
import TopNav from '../TopNav';

class Airlines extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>
                <TopNav />
                <Container className="landing">
                    Airlines page
                </Container>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Airlines);
