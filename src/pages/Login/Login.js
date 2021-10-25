import React from 'react';
import { Alert, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // destructuring data from custom hooks.
    const { setUser, setIsLoading, handleEmailChange,faceBookSignInHandler, handlePasswordChange, 
        error, message, processLogin, handleGoogleSignIn, GithubSignInHandler, setMessage,setError } = useAuth()
    
    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = location.state?.from || '/home';
    
    // google sign in functionality
    const googleLogin = (e) => {
        e.preventDefault();
        handleGoogleSignIn()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri)
              })
              .catch(error => {
                setError(error.message);
                setMessage("")
              })
              .finally(() => setIsLoading(false));
    }
    // github sign in functionality
    const gitHubLogin = e => {
        e.preventDefault();
        GithubSignInHandler()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message);
                setMessage("")
              })
              .finally(() => setIsLoading(false));
    }
    // facebook sign in functionality
    const faceBookLogin = e => {
        e.preventDefault();
        faceBookSignInHandler()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri)
        })
        .catch(error => {
            setError(error.message);
            setMessage("")
          })
          .finally(() => setIsLoading(false));
    }
    // email password login functionality
    const emailPassLogin = (e) => {
        e.preventDefault();
        processLogin()
        .then(result => {
            const { displayName, email, photoURL } = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
        }
            setUser(loggedInUser);
            history.push(redirect_uri)
            setMessage("Successfully logged in!");
            setError("");
          })
          .catch(error => {
            setError(error.message);
            setMessage("")
          })
          .finally(() => setIsLoading(false));

    }
    return (
        <Container fluid className='bg-img'>
            <div className="d-flex justify-content-center align-items-center">
            <Col md={4} className='mt-5'>
                <form onSubmit={emailPassLogin}>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control"  required />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" required />
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
                    <div className='d-flex justify-content-evenly my-3'>
                        <button type="submit" className="btn banner-btn ">Login</button>
                        <Link to="/registration" className="btn banner-btn">Register</Link>

                    </div>
                    <div className="d-flex justify-content-evenly my-4">
                        <button onClick={googleLogin} className="btn"><i className="social-icon fab fa-google"></i></button>
                        <button onClick={faceBookLogin} className="btn"><i className="social-icon fab fa-facebook"></i></button>
                        <button onClick={gitHubLogin} className="btn"><i className="social-icon fab fa-github-square"></i></button>

                    </div>
                </form>
            </Col>
            
        </div>
        </Container>
    );
};

export default Login;