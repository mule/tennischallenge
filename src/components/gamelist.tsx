"user strict";
import React = require('react');

class GameList extends React.Component<IGameListProps,{}> {
    constructor( props:IGameListProps ) {
        super( props );

    }

    render(){

        var gameNodes = this.props.games.map( function(game){
           return(
               <tr key={game.id}>
                   <td>{game.id}</td>
                   <td>{game.date}</td>
                   <td>{game.challenger.name}</td>
                   <td>{<game className="defender"></game>name}</td>
                   <td>{game.challengerPoints}</td>
                   <td>{game.defenderPoints}</td>
                   <td>{game.gameType}</td>
               </tr>
           );

        });

        return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Games played</span>
                <table>
                    <thead>
                        <th data-field="id">Id</th>
                        <th data-field="date">Game date</th>
                        <th data-field="challenger">Challenger</th>
                        <th data-field="defender">Defender</th>
                        <th data-field="challengerPoints">Challenger points</th>
                        <th data-field="defenderPoints">Defender points</th>
                        <th data-field="gameType">Game type</th>
                        <th data-field="winner">Winner</th>
                    </thead>
                    <tbody>
                        {gameNodes}
                    </tbody>
                </table>

            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
        );
    }
}



export default GameList;