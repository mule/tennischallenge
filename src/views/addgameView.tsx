import * as React from 'react';
import * as _ from 'lodash';
import PlayerInput from '../components/playerInput';
import * as GameActions from '../actions/games';
import {ChallengerEntered} from '../actions/players';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard';

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addGame: (game: IGame) => {
            dispatch(GameActions.addGame(game));
        },
        challengerEntered: (playerCards: IPlayerCard) => {
            dispatch(ChallengerEntered(playerCards));
        }
    }

}

const mapStateToProps = (state: any) => {
    return {
        playerCards: state.playerCards
    };
}


interface IAddGameViewProps {
    addGame: Function;
    challengerEntered: Function;
    playerCards: any;
}


class AddGameView extends React.Component<IAddGameViewProps,any> {
    constructor(props: any) {
        super(props);
    }

    onAddGameClick(e: any) {
        e.preventDefault();
        var game: IGame;
        var challenger: IPlayer;
        var defender: IPlayer;
        challenger = {id: 1, name: 'Bura'};
        defender = {id: 2, name: 'Markku'};
        game = {
            id: 1,
            date: 100,
            gameType: 1,
            challenger: challenger,
            defender: defender,
            challengerPoints: 0,
            defenderPoints: 2
        };

        this.props.addGame(game);
    }

    onChallengerBlur(e: any) {

        var challengerName = e.target.value;
        var challengerCard = this.props.playerCards.challenger;
        challengerCard.name = challengerName;

        if (challengerName)
            challengerCard.visible = true;
        else
            challengerCard.visible = false;

        this.props.challengerEntered(challengerCard);
    }

    handleChallengerChange(e: any) {

        this.setState(_.assign({challenger: {name: e.target.value}}));
    }

    handleDefenderChange(e: any) {
        this.setState(_.assign({defender: {name: e.target.value}}));
    }

    render() {

        var boundClick = this.onAddGameClick.bind(this);
        var boundChallengerChange = this.handleChallengerChange.bind(this);
        var boundDefenderChange = this.handleDefenderChange.bind(this);

        var boundChallengerBlur = this.onChallengerBlur.bind(this);
        var challengerName = _.get(this.state, 'challenger.name', '');
        var defenderName = _.get(this.state, 'defender.name', '');


        var challengerCard = <PlayerCard name={challengerName}/>
        var defenderCard = <PlayerCard name={defenderName}/>

        return (

            <div>
                <form>
                    <div className="row">
                        <div className="col s2">
                            <input id="date" type="text" className="datepicker"/>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="col s2">
                            <input id="challenger"
                                   type="text"
                                   value={challengerName}
                                   onChange={boundChallengerChange}
                                   onBlur={boundChallengerBlur}
                                   className="validate"/>
                            <label htmlFor="challenger">Challenger</label>
                        </div>
                        <div className="col s2">
                            <input id="defender"
                                   type="text"
                                   className="validate"
                                   onChange={boundDefenderChange}
                            />
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
                        <div className="col s2  ">
                            <input id="game_type" type="text" className="validate"/>
                            <label htmlFor="game_type">Game type</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s2">
                            <button className="btn waves-effect waves-light"
                                    type="submit"
                                    name="action"
                                    onClick={boundClick}>
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="row valign-wrapper">
                    <div className="col s4">{challengerCard}</div>
                    <div className="col s1">
                        <div className="valign">
                            vs.
                        </div>
                    </div>
                    <div className="col s4">{defenderCard}</div>
                    <div className="col s3"></div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameView);