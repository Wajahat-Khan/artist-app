import React from 'react';
import './styles.scss';
import { Container } from 'react-bootstrap';
import TopNav from '../TopNav';

class Passengers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <>
        <TopNav />
        <Container className="landing">
          passengers page
      </Container>
      </>
    );
  }
}

export default Passengers;
