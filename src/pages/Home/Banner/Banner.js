import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        // banner part
        <Container fluid className="m-0 p-0">
            <Col className="banner">
                <div className="banner-text col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1><span>MS Child Health Care</span> </h1>
                    <p className="px-5">MS Child Health Care provides comprehensive pediatric and adolescent health care services. 
                        Our physicians specialize in pediatrics including diagnostics, prevention, 
                        and treatment of conditions such as allergies, asthma, colds and flu, diabetes (type 1 and type 2), 
                        ear infections, eczema and more.
                    </p>
                    <button className="banner-btn">Learn More<i className="fas fa-arrow-right mx-2"></i></button>
                </div>
            </Col>
        </Container>
    );
};

export default Banner;