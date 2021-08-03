import React from 'react';
import './styles.scss';
import { connect } from "react-redux";
import { getAllAirlines, getAirline, clearAirline } from '../../js/actions'
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import TopNav from '../TopNav';

class Airlines extends React.Component {

    handleOpen = (id) => {
        this.props.getAirline(id);
    }

    handleClose = () => {
        this.props.clearAirline();
    }
    render() {
        const { allAirlines, airline, showModal } = this.props;

        return (
            <>
                <TopNav />
                <h1 class="text-center"> AIRLINES </h1> 
                <Container>
                    <Row className="passengers-container">
                        {
                            allAirlines.length > 0 &&
                            allAirlines.map(al => {
                                return (
                                    <Col id={al.id}>
                                        <Card style={{ width: '18rem', marginBottom: '5%' }}>
                                            <Card.Body>
                                                <Card.Title>{al.name}</Card.Title>
                                                <Card.Text>
                                                    {al.country}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => this.handleOpen(al.id)}>More Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>

                <Modal show={showModal} onHide={this.handleClose} animation={true} centered>

                    <Modal.Header closeButton>
                        <Modal.Title>{airline?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>SLOGAN:</b> {airline?.slogan}</p>
                        <p><b>Head Quarters:</b> {airline?.head_quaters}</p>
                        <b>Website:</b> <a href={airline?.website}>{airline?.website}</a>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllAirlines: () => dispatch(getAllAirlines()),
        getAirline: payload => dispatch(getAirline(payload)),
        clearAirline: () => dispatch(clearAirline())
    }
}
const mapStateToProps = state => {
    return {
        airline: state.airline,
        allAirlines: state.allAirlines,
        showModal: state.showModal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Airlines);
