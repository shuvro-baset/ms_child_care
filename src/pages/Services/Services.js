import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Services = () => {
    // getting services data from custom hooks
    const [services] = useServices()
    return (
        <Container>
            <Row className="my-5">

                {/* services data mapping and showing into ui.  */}
                {
                services.map((service) => 
                    <Col md={4} className="my-3" key={service.id}>
                            <Card className="p-2 rounded shadow card-div">
                                <img className="img-fluid rounded m-3" src={service.image} alt="" />
                                <Card.Body>
                                    <h4>{ service.title }</h4>
                                    <p>{service.description.slice(0,150)}</p>
                                </Card.Body>
                                <Card.Footer className="text-center bg-transparent m-0 p-0 border-0">
                                <button className="btn service-btn w-50">  <Link to={`/service/${service.id}`} className="text-white link-btn">details</Link> </button>

                                </Card.Footer>
                            </Card>
                        </Col>
                )
            }
            </Row>
        </Container>
    );
};

export default Services;