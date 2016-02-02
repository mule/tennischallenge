import React = require('react');
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
                    <div className="row">
                        <div className="col s2">
                            <input id="date" type="text" className="validate"/>

                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="col s2">
                            <input id="challenger" type="text" className="validate"/>

                            <label htmlFor="challenger">Challenger</label>
                        </div>
                        <div className="col s2">
                            <input id="defender" type="text" className="validate"/>
                            <label htmlFor="defender">Defender</label>
                        </div>
                        <div className="col s2">
                            <input id="defender_points" type="text" className="validate"/>
                            <label htmlFor="defender_points">Defender points</label>
                        </div>
                        <div className="col s2">
                            <input id="challenger_points" type="text" className="validate"/>
                            <label htmlFor="challenger_points">Challenger points</label>
                        </div>
                        <div className="col s1  ">
                            <input id="game_type" type="text" className="validate"/>
                            <label htmlFor="game_type">Game type</label>
                        </div>
                    </div>
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
                    <a href="#">This is a link</a>
                </div>
            </div>
        );
    }
}


export default GameList;