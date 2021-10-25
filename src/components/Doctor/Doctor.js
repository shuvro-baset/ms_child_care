import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'
const Doctor = (props) => {
    // destruction props data
    const {name, image , designation} = props.doctor
    return (
        <Col md={4}>
            {/* showing dynamic data in card components */}
            <Card className="my-5 p-3 border-0 shadow custom-card">
                <img className="img-fluid w-100 rounded"  src={image} alt="" />
                <div className="text-center">
                    <h4 className="my-3">{name}</h4>
                    <p>{designation}</p>
                </div>
                <div className="d-flex justify-content-evenly align-items-center text-white">
                    <i className="doctors-social-icon fab fa-facebook"></i>
                    <i className="doctors-social-icon fab fa-google"></i>
                    <i className="doctors-social-icon fab fa-twitter"></i>
                    <i className="doctors-social-icon fab fa-whatsapp"></i>
                </div>
            </Card>
        </Col>

        
    );
};

export default Doctor;