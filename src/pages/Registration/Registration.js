import React from 'react';
import { Alert, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    // set location 
    const location = useLocation();
    const history = useHistory();
    // set redirect location
    const redirect_uri = location.state?.from || '/login';
    // destructuring data from custom hooks
    const { name, handleNameChange,  handleEmailChange, handlePasswordChange, error, message, handleRegistration, 
            password, setError, setMessage, setUserName, setUser, setIsLoading } = useAuth()

    // handle registration functionality
    const registration = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
            }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
        return;
        }
        handleRegistration()
        .then(result => {
            console.log("name paisi: ", result.user, name)
            setUserName(name)
            setUser()
            setError("")
            setMessage("Congratulation! You have successfully registered.")
            history.push(redirect_uri)
      })
      .catch(error => {
        setError(error.message);
        setMessage("")
      }).finally(() =>  setIsLoading(false))
    }
    return (
        <Container fluid className='m-0 p-0'>
        <div className="d-flex justify-content-center align-items-center reg-bg">
            <Col md={4} className='my-5 '>
                <form onSubmit={registration}>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input onBlur={handleNameChange} type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" required  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control"  />
                    </div>
                    {
                        error && 
                        <Alert variant="danger">
                            <Alert.Heading>{error}</Alert.Heading>
                            
                        </Alert>
                    }
                    {   message &&
                        <Alert variant="success">
                            <Alert.Heading>{message}</Alert.Heading>
                            
                        </Alert>
                    }
                    <div className='my-2'>
                        <button type="submit" className="btn banner-btn">Register</button>
                    </div>
                    <div>
                        <p>Already registered? login in <Link to="/login">here</Link></p>
                    </div>
                    
                </form>
            </Col>
        
    </div>
    </Container>
    );
};

export default Registration;