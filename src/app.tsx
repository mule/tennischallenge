import React = require('react');
import ReactDOM = require('react-dom');
import {Router, Route, Link, History, PropTypes} from 'react-router';


class App extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo">Tennis Challenge</a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="sass.html">Sass</a>
                                </li>
                                <li>
                                    <a href="badges.html">Components</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="row">
                    <div className="col s6"></div>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Viitoset</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="Three points">Viitoset</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>


                </div>
            </div>
        );


    }


}


ReactDOM.render((
    <Router>
        <Route component={App} path="/">
        </Route>

    </Router>), document.getElementById('app'));


