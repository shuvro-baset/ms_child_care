import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        // about us page with static text
        <Container>
            <Row className="my-5">
                
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1590527548172-295fdcb1bab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80" alt="" />
                </Col>
                <Col md={8}>
                    <h2 className="text-center my-5">About Us</h2>
                    <p className="my-4">Welcome to MS child care. We are born to take care of your children. Our mission is to take care of children health. We provide a bunch of services to protect your kids. Our mission is to ensure appropriate developmental opportunities and effective activities for protection, participation and progress, that enable children to meet the goals of early care, stimulation and learning plans. Also to provide emotional and social care to the enrolled children which enable quality interaction with parents, family members, adults and peers and which will promote positive sustained relationships in later life;
                        To give young children support, security and ensure development of effective social behavior through dealing with in a constructive manner;
                        If you're breastfeeding, ask your health visitor, midwife or GP for advice before taking aspirin. We know how much parents would prefer to stay home with their children, especially if their child needs consistent medical care. Yet, schedules may not always allow for it. With the help of Homewatch CareGivers, families can keep their children in the comfort of familiar surroundings while making sure they’re receiving the care they need. Highly qualified child caregivers are insured and have passed extensive annual background checks to ensure families feel safe and comfortable.We believe that strong relationships are important, and we match the strengths of a caregiver to the specific circumstances of the child. This way, a child is receiving the care they need, both emotionally and physically. Finding someone to trust to care for your little one is not always easy—especially when needing a caregiver was not in the original plans. Our locally owned and operated teams are made up of compassionate and trained care professionals who will make sure everyone's experience is enriching and enjoyable. In fact, many caregivers have children and grandchildren of their own, giving them the personal, hands-on experience in addition to their extensive childcare training. They’ll treat you like family and, in many instances, that’s exactly what they’ll become! We always personalize our care and get to know clients to make sure they’re as happy and comfortable as possible. 
                        Thanks for visiting our website. Keep faith on us and never regreat
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;