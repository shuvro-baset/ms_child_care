import React from 'react';
import { Col, Row } from 'react-bootstrap';

const News = (props) => {
    // destructuring props data 
    const {title, description , image} = props.news
    return (
        <Row className="my-5">
            <Col md={5}>
                <img className="img-fluid w-100"  src={image} alt="" />
            </Col>
            <Col md={7}>
                <h4 className="my-3">{title}</h4>
                <p>{description.slice(0,550)}</p>
            </Col>
        </Row>
    );
};

export default News;