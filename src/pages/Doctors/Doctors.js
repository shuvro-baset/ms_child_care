import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../../components/Doctor/Doctor';
import useDoctors from '../../hooks/useDoctors';

const Doctors = () => {
    // doctors data from custom hooks
    const [doctors] = useDoctors()
    return (
        <Container>
            <Row>
                {
                    // map data and passing every items to the Doctors components
                    doctors.map(doctor => 
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        >
                        </Doctor>
                     
                    )
                }
            </Row>
        </Container>
    );
};

export default Doctors;