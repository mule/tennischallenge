import React = require('react');
import {Link}   from 'react-router';
import Game from './game';

class GameList extends React.Component<IGameListProps,{}> {
    constructor(props: IGameListProps) {
        super(props);

    }

    render() {

        var gameNodes = this.props.games.map(function (game) {
            return (
                <Game game={game}></Game>
            );

        });

        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Games played</span>
                    <table>
                        <thead>
                            <tr>
                                <th data-field="id">Id</th>
                                <th data-field="date">Game date</th>
                                <th data-field="challenger">Challenger</th>
                                <th data-field="defender">Defender</th>
                                <th data-field="challengerPoints">Challenger points</th>
                                <th data-field="defenderPoints">Defender points</th>
                                <th data-field="gameType">Game type</th>
                                <th data-field="winner">Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameNodes}
                        </tbody>
                    </table>

                </div>
                <div className="card-action">
                    <Link to="/games/add">Add Game</Link>
                </div>
            </div>
        );
    }
}


export default GameList;