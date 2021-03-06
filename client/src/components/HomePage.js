import React, { createRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import myimage from '../images/logocross.png';

class HomePage extends React.Component {
    render() {
        return (
            <div className="container home-page-container">
                <div className="row justify-content-md-center">
                    <div className="col-12 pb-5 d-flex justify-content-around">
                        <img className="home-page-image" src={myimage}></img>
                    </div>
                    <div className="col-12 pb-5 d-flex justify-content-around">
                        <h1 className="home-page-title">Mouse Trainer</h1>
                    </div>{' '}
                    <div className="col-12 d-flex justify-content-around">
                        <Link to="/ranked">
                            <button type="button" className="home-button-styling">
                                RANKED
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 pb-2 d-flex justify-content-around">
                        <Link to="/play">
                            <button type="button" className="home-button-styling">
                                QUICK PLAY
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 d-flex justify-content-around">
                        <Link to="/modes">
                            <button type="button" className="home-button-styling">
                                MODES
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
