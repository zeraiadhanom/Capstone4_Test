import React, {Component} from 'react';
import './Login.css';
import HeaderBar from '../components/header-bar';
import LandingPage from '../components/landing-page';
import Dashboard from '../components/dashboard';
import RegistrationPage from '../components/registration-page';
import {Route, withRouter} from 'react-router-dom';

class Login extends Component {
   

    render() {
       
        return(
            <div className="container" >
                <div className='login'>
                  <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
               </div>
            </div>
        )
    }
}

export default Login;