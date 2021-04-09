import React from 'react';
import './styles.scss';
import { connect } from "react-redux";
import { getArtistEvents } from '../../js/actions'
import { Container, Row, Col, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';

// ArtistEvents Component shows details of events of artist
class ArtistEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searched_text: '' }
  }

  componentDidMount = () => {
    const { artist } = this.props;
    this.props.getArtistEvents(artist.name);
  }

  render() {
    const { artist, artist_events } = this.props;
    
    return (
      <Container className="landing">
        <Row className="row-top">
          <Col>
            <Button variant="primary" onClick={() => { this.props.history.push(`/`); }}>&lt; Back to Results</Button>
          </Col>
        </Row>
        <Row className="row-top">
          <Col className="artist-event">
            <Card className="artist-event-card">
              <Card.Img className="artist-event-image" variant="top" src={artist.image_url} />
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>
                  {artist.facebook_page_url}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-top">
          <Col className="upcoming-events">
            <p>{artist_events.length} upcoming events</p>
          </Col>
        </Row>
        <Row className="row-top">
          {
            artist_events.length > 0 ? (
              artist_events.map((event, i) => {
                return (
                  <Col xs={12} md={4} lg={4} key={i}>
                    <Card className="event-details">
                      <Card.Header>Event Details</Card.Header>
                      <Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem><span className="title">Country:</span><span className="description">{event.venue.city}</span></ListGroupItem>
                          <ListGroupItem><span className="title">City:</span><span className="description">{event.venue.country}</span></ListGroupItem>
                          <ListGroupItem><span className="title">Venue:</span><span className="description">{event.venue.name}</span></ListGroupItem>
                          <ListGroupItem><span className="title">Date:</span><span className="description">{event.datetime}</span></ListGroupItem>

                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            ) : (null)
          }
        </Row>
      </Container>
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
