var React = require('react');
var _ = require('lodash');
var GameActions = require('../actions/games');
var players_1 = require('../actions/players');
var react_redux_1 = require('react-redux');
var PlayerCard_1 = require('../components/PlayerCard');
const mapDispatchToProps = (dispatch) => {
    return {
        addGame: (game) => {
            dispatch(GameActions.addGame(game));
        },
        challengerEntered: (playerCards) => {
            dispatch(players_1.ChallengerEntered(playerCards));
        }
    };
};
const mapStateToProps = (state) => {
    return {
        playerCards: state.playerCards
    };
};
class AddGameView extends React.Component {
    constructor(props) {
        super(props);
    }
    onAddGameClick(e) {
        e.preventDefault();
        var game;
        var challenger;
        var defender;
        challenger = { id: 1, name: 'Bura' };
        defender = { id: 2, name: 'Markku' };
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
    onChallengerBlur(e) {
        var challengerName = e.target.value;
        var challengerCard = this.props.playerCards.challenger;
        challengerCard.name = challengerName;
        if (challengerName)
            challengerCard.visible = true;
        else
            challengerCard.visible = false;
        this.props.challengerEntered(challengerCard);
    }
    handleChallengerChange(e) {
        this.setState(_.assign({ challenger: { name: e.target.value } }));
    }
    handleDefenderChange(e) {
        this.setState(_.assign({ defender: { name: e.target.value } }));
    }
    render() {
        var boundClick = this.onAddGameClick.bind(this);
        var boundChallengerChange = this.handleChallengerChange.bind(this);
        var boundDefenderChange = this.handleDefenderChange.bind(this);
        var boundChallengerBlur = this.onChallengerBlur.bind(this);
        var challengerName = _.get(this.state, 'challenger.name', '');
        var defenderName = _.get(this.state, 'defender.name', '');
        var challengerCard = React.createElement(PlayerCard_1.default, {"name": challengerName});
        var defenderCard = React.createElement(PlayerCard_1.default, {"name": defenderName});
        return (React.createElement("div", null, React.createElement("form", null, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "date", "type": "text", "className": "datepicker"}), React.createElement("label", {"htmlFor": "date"}, "Date")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger", "type": "text", "value": challengerName, "onChange": boundChallengerChange, "onBlur": boundChallengerBlur, "className": "validate"}), React.createElement("label", {"htmlFor": "challenger"}, "Challenger")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "defender", "type": "text", "className": "validate", "onChange": boundDefenderChange}), React.createElement("label", {"htmlFor": "defender"}, "Defender")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "defender_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "defender_points"}, "Defender points")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "challenger_points"}, "Challenger points")), React.createElement("div", {"className": "col s2  "}, React.createElement("input", {"id": "game_type", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "game_type"}, "Game type"))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("button", {"className": "btn waves-effect waves-light", "type": "submit", "name": "action", "onClick": boundClick}, "Submit", React.createElement("i", {"className": "material-icons right"}, "send"))))), React.createElement("div", {"className": "row valign-wrapper"}, React.createElement("div", {"className": "col s4"}, challengerCard), React.createElement("div", {"className": "col s1"}, React.createElement("div", {"className": "valign"}, "vs.")), React.createElement("div", {"className": "col s4"}, defenderCard), React.createElement("div", {"className": "col s3"}))));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AddGameView);
//# sourceMappingURL=AddGameView.js.map