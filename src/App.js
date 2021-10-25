import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './pages/Registration/Registration';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import AllNews from './pages/AllNews/AllNews';
import Doctors from './pages/Doctors/Doctors';
function App() {
  return (
    <>
      {/* authprovider */}
      <AuthProvider>
      <Router>
      {/* navbar components */}
        <NavBar></NavBar>
        <Switch>
          {/* route set */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/news">
            <AllNews></AllNews>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
