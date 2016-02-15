import * as React from 'react';
import * as _ from 'lodash';
import PlayerInput from '../components/playerInput';
import * as GameActions from '../actions/games';
import {ChallengerEntered} from '../actions/players';
import { connect } from 'react-redux';

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
        challengerCard: state.playerCards.challenger
    };
}


interface IAddGameViewProps {
    addGame: Function;
    challengerEntered: Function;
    challengerCard: IPlayerCard;
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
        defender =  {id:2, name: 'Markku'};
        game = {id: 1, date: 100, gameType: 1, challenger: challenger, defender: defender, challengerPoints: 0 , defenderPoints:2};

        this.props.addGame(game);
    }

    onChallengerBlur(e: any){

        var challengerName = e.target.value;
        var challengerCard = this.props.challengerCard;
        challengerCard.name = challengerName;

        if(challengerName)
            challengerCard.visible = true;
        else
            challengerCard.visible = false;

         this.props.challengerEntered(challengerCard);
    }

    handleChallengerChange(e: any){

        this.setState(_.assign({challenger: { name: e.target.value}}));
    }

    render() {

        var boundClick = this.onAddGameClick.bind(this);
        var boundChallengerChange = this.handleChallengerChange.bind(this);
        var boundChallengerBlur = this.onChallengerBlur.bind(this);
        var challengerName = _.get(this.state, 'challenger.name', '');

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
                            <input id="challenger" type="text" className="validate"/>
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
                            <button className="btn waves-effect waves-light" type="submit" name="action"
                                    onClick={boundClick}>Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameView);