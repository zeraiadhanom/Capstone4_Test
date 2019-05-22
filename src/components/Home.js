import React from 'react';
import './Home.css';
import Login from '../components/Login'
export default class Home extends React.Component {
   
    render() {
        return (
            <div className="home-page">
                <h2>Welcome to The Video Search App</h2>

                <div className="login">
                    < Login />
                </div>
            </div>

        );
    }
}
