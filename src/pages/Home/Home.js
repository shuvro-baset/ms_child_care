import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Banner from './Banner/Banner';
import family2 from '../../images/family2.jpg'
import family3 from '../../images/family3.jpg'
import './Home.css'
import Features from '../../components/Features/Features';
const Home = () => {
    const [services] = useServices()
    return (
        <>
            {/* banner component */}
            <Banner></Banner>

            <Container>

                <Row className="my-5">
                    <Col md={4} className="d-flex align-items-center">
                        <h3 className="family-text">We are always ready to help your child and your family.</h3>
                    </Col>
                    <Col md={4}>
                        <div className="family-img my-2">
                            <img className="img-fluid rounded " src="https://images.pexels.com/photos/7282910/pexels-photo-7282910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                            <img src={family3} className="img-fluid my-3 rounded" alt="" data-aos="flip-up" />
                            <img src={family2} className="img-fluid my-3 rounded" alt="" data-aos="flip-down" />
                        </div>
                        
                    </Col>
                </Row>
                {/* services part */}
                <Row className="my-3">
                    <h1 className="text-center">Services</h1>

                    {
                    services.slice(0,6).map((service) => 
                        
                        <Col md={4} className="my-3" key={service.id} data-aos="zoom-in-up">
                            <Card className="p-2 rounded shadow card-div" >
                                <img className="img-fluid rounded m-3" src={service.image} alt="" />
                                <Card.Body>
                                <h4>{ service.title }</h4>
                                <p>{service.description.slice(0,150)}</p>
                                </Card.Body>
                                <Card.Footer className="text-center bg-transparent m-0 p-0 border-0">
                                <button className="btn service-btn w-50">  <Link to={`/service/${service.id}`} className="text-white link-btn">details<i className="fas fa-arrow-right mx-2"></i></Link> </button>

                                </Card.Footer>
                            </Card>
                        </Col>
                    
                    )
                }
                </Row>
                {/* our specialists  */}
                <Row>
                    <h2 className="text-center my-5">Our Specialists</h2>
                    <Col md={3} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div>
                            <img className='img-fluid' src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Col>
                    <Col md={3} data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div>
                            <img className='img-fluid' src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Col>
                    <Col md={3} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div>
                            <img className='img-fluid' src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Col>
                    <Col md={3} data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                        <div>
                            <img className='img-fluid' src="https://images.pexels.com/photos/8442537/pexels-photo-8442537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </Col>
                </Row>
        </Container>
        {/* features components */}
        <Features></Features>
        </>
        
    );
};

export default Home;