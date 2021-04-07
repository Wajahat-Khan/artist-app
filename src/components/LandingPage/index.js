import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { getArtist } from '../../js/actions'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';


class LandingPage extends React.Component {
    constructor(props){
      super(props);
      this.state={searched_text:''}
    }

    componentDidMount = () => {

    }
    componentDidUpdate(){}

    searchArtists = (searched_text) => {
      this.setState({searched_text});
      if (searched_text !== ''){
        this.props.getArtist(searched_text);
      }
    }

    render(){
      const {searched_text} = this.state;
      const {artist} = this.props;
      return (
        <Container>
          <Row className="justify-content-md-center">
            <Col>
            <Form.Control type="text" value={searched_text} placeholder="Search Artist" onChange= { (e) => {this.searchArtists(e.target.value)}} />
            </Col>
          </Row>

          <Row> 
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img style={{ width: '18rem' }} variant="top" src={artist.image_url} />
                <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                  <a className="btn" variant="primary" href={artist.facebook_page_url}>Facebook</a>
                </Card.Body>
              </Card>
          </Row>
        </Container>
      );
    }
}
const mapDispatchToProps = dispatch => {
  return {
      getArtist: payload => dispatch(getArtist(payload)),
  }
}
const mapStateToProps = state => {
  return {
    artist: state.artist,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
