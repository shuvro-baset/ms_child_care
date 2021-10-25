import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'
const Features = () => {
    return (
        <Container fluid>
            <Row className="features-div my-5 p-5">
                <Col md={3}>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="mx-2 feature-icon"><i className="fas fa-home"></i></div>
                        <div className="mx-2">
                            <h4>125</h4>
                            <h5>Our Rooms</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="mx-2 feature-icon"><i className="fas fa-user"></i></div>
                        <div className="mx-2">
                            <h4>23</h4>
                            <h5>Special Doctors</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="mx-2 feature-icon"><i className="far fa-smile"></i></div>
                        <div className="mx-2">
                            <h4>223</h4>
                            <h5>Happy Patients</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="mx-2 feature-icon"><i className="far fa-calendar-alt"></i></div>
                        <div className="mx-2">
                            <h4>12</h4>
                            <h5>Year of Experience</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;