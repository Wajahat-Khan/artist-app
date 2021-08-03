import React from 'react';
import './styles.scss';
import { Container } from 'react-bootstrap';
import TopNav from '../TopNav';

class Settings extends React.Component {

  render() {

    return (
      <>
      <TopNav />
      <Container className="landing">
          Settings page
      </Container>
  </>
    );
  }
}

export default Settings;
