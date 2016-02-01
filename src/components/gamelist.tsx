"user strict";
import React = require('react');




class GameList extends React.Component<{},{}> {
    constructor( props:any ) {
        super( props );

    }

    render(){

        return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">List of games</span>
                <p>Games table would be here.
                </p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
        );
    }
}



export default GameList;