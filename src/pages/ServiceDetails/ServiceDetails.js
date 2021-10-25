import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    // getting id from useParams.
    const {id} = useParams();
    // set details
    const [details, setDetails] = useState([])

    // fetching data and finding single data 
    useEffect(()=>{

        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data.find(item => +id === item.id)))
    } ,[id])

    // destructuring data
    const {title, description, image} = details;
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <div>
                        <div className="py-3">
                            <h3 className="py-5 fw-bolder text-center">{title}</h3>
                            <p>{description}</p>
                        </div>

                    </div>
                </Col>
                <Col md={6}>
                    <div className="my-5">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default ServiceDetails;