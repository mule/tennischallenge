import React = require('react');
import GameList from '../components/gamelist';

class Dashboard extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        var games: IGame[] =
            [
                {
                    id: "1",
                    gameType: 1,
                    date: 100,
                    challenger: {id: "1", name: "Bura"},
                    defender: {id:"2", name: "Markku"},
                    challengerPoints: 0,
                    defenderPoints: 2
                },
                {
                    id: "2",
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
                <div className="row">
                    <div className="col s6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Viitoset</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
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
                                <span className="card-title">Best out of three games</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <GameList games={games}></GameList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;