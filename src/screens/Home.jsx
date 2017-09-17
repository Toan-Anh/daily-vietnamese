import React, { Component } from 'react';

import logo from '../res/logo.svg';
import '../stylesheets/screens/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container flex-container">
                        <h1>Learn Vietnamese With Total Efficiency</h1>
                        <h2>Courses, a Method, and a Community</h2>
                    </div>
                </div>

                <div className='container'>
                </div>
            </div>
        );
    }
}

export default Home;
