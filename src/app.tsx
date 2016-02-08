
import React = require('react');
import * as Redux from 'redux';
import * as ReactRedux  from 'react-redux';
import ReactDOM = require('react-dom');
import {Router,IndexRoute, Route, Link, History, PropTypes} from 'react-router';
import Dashboard from './views/Dashboard';
import AddGameView from './views/AddGameView';

import {rootReducer} from "./reducers/rootReducer";
import createStore = Redux.createStore;



let store = createStore(rootReducer);

class ReduxApp extends React.Component<any,any>{

constructor(props: any){
    super(props);


}

    render(){

        return(
          <ReactRedux.Provider store={store}>
              <App {...this.props}/>
          </ReactRedux.Provider>
        );
    }

}

class App extends React.Component<any,any> {
    constructor( props:any ) {
        super( props );

    }

    render() {

        var games: IGame[] =
            [
                {
                id: 1,
                gameType: 1,
                date: 100,
                challenger: {id: "1", name: "Bura"},
                defender: {id:"2", name: "Markku"},
                challengerPoints: 0,
                defenderPoints: 2
                },
                {
                    id: 2,
                    gameType: 2,
                    date: 200,
                    challenger: {id: "1", name: "Bura"},
                    defender: {id:"2", name: "Markku"},
                    challengerPoints: 2,
                    defenderPoints: 0
                }
            ];
        return (
            <div>
                <div className="navbar">
                    <nav role="navigation">
                        <div className="nav-wrapper container">
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
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


ReactDOM.render( (
        <Router>
            <Route component={ReduxApp} path="/">
                <IndexRoute component={Dashboard} />
                <Route component={AddGameView} path="games/add"></Route>
            </Route>
        </Router>
    ),
    document
        .getElementById(
            'app'
        ) );



