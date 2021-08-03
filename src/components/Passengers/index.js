import React from 'react';
import './styles.scss';
import { Container, Card, Row, Col, Pagination } from 'react-bootstrap';
import TopNav from '../TopNav';
import API from '../../services/index';

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { passengers: [], activePage: 0, totalPages: 0 }
  }
  componentDidMount = () => {
    API.getPassengers(0).then(res => {
      this.setState({ passengers: res, totalPages: res.totalPages });
    }).catch(e => {
      console.log(e)
    });
  }

  nextPage = () => {
    const { activePage, totalPages } = this.state;
    let nextPg = activePage + 1;
    if (nextPg <= totalPages) {
      API.getPassengers(nextPg).then(res => {
        this.setState({ passengers: res, totalPages: res.totalPages, activePage: nextPg });
      }).catch(e => {
        console.log(e)
      });
    }
  }

  prevPage = () => {
    const { activePage } = this.state;
    if (activePage > 0) {
      let prevPg = activePage - 1;
      API.getPassengers(prevPg).then(res => {
        this.setState({ passengers: res, totalPages: res.totalPages, activePage: prevPg });
      }).catch(e => {
        console.log(e)
      });
    }
  }
  render() {
    const { passengers, activePage, totalPages } = this.state;
    return (
      <>
        <TopNav />
        <h1 class="text-center"> PASSENGERS </h1> 
        <Container>
          <Row className="passengers-container">
            {
              passengers.data !== undefined &&
              passengers.data.map(p => {
                return (
                  <Col>
                    <Card style={{ width: '18rem', marginBottom: '5%' }}>
                      <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                          Total Trips: {p.trips} <br />
                      Travelling by: {p.airline[0].name}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
          <Row>
            <Col>
              <Pagination>
                <Pagination.Prev onClick={this.prevPage} disabled={activePage === 0} />
                <Pagination.Next onClick={this.nextPage} disabled={activePage === totalPages} />
              </Pagination>
              <span className="pages">Page # {activePage + 1}</span>
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Passengers;
