import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { getArtist } from '../../js/actions'
import { Container, Row, Col, Form, Card, Button} from 'react-bootstrap';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searched_text: '', artist:{} }
    this.setState({artist:{}})
  }
  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  componentDidUpdate = (prevProps) => {
    const {searched_text, artist} = this.state;

    if(prevProps.artist !== this.props.artist){
      const {searched_text} = this.state;
      if(searched_text !== ""){
        this.setState({artist:this.props.artist})
      }
    }
    if(searched_text === "" && !this.isEmpty(artist)){
      this.setState({artist:{}})
    }
  }
  componentDidMount() {
    this.setState({artist:this.props.artist})
   }

  searchArtists = (searched_text) => {
    this.setState({ searched_text });
    if (searched_text !== '') {
      this.props.getArtist(searched_text);
    }else{
      this.setState({artist:{}})
    }
  }
  
  eventsPage = () =>{
    const { artist } = this.state;
    this.props.history.push(`/artist/${artist.id}`);
  }
  render() {
    const { searched_text,artist } = this.state;
    console.log(this.state)
    if (!this.isEmpty(artist))
    {
      return (
        <Container className="landing">
          <Row className="row-top">
          <Col>
              <Form.Control type="text" value={searched_text} placeholder="Search Artist" onChange={(e) => { this.searchArtists(e.target.value) }} />
          </Col>
          </Row>
          <Row className="row-top">
            <Col className="artist">
              <Card className="artist-card">
                <Card.Img className="artist-image" variant="top" src={artist.image_url} />
                <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                  <Card.Text>
                    {artist.facebook_page_url}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{this.eventsPage()}}>Check Events</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    else{
      return (
        <Container className="landing">
          <Row className="row-top">
          <Col>
              <Form.Control type="text" value={searched_text} placeholder="Search Artist" onChange={(e) => { this.searchArtists(e.target.value) }} />
          </Col>
          </Row>
          <Row className="row-top">
            <Col>
          <p>No Records Found</p>
          </Col>
          </Row>
        </Container>
      );
    }

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
