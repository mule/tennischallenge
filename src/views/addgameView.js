var React = require('react');
var _ = require('lodash');
var GameActions = require('../actions/games');
var react_redux_1 = require('react-redux');
const mapDispatchToProps = (dispatch) => {
    return {
        addGame: (game) => {
            dispatch(GameActions.addGame(game));
        }
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
        game = { id: 1, date: 100, gameType: 1, challenger: challenger, defender: defender, challengerPoints: 0, defenderPoints: 2 };
        this.props.addGame(game);
    }
    handleChallengerChange(e) {
        this.setState(_.assign({ challenger: { name: e.target.value } }));
    }
    render() {
        var boundClick = this.onAddGameClick.bind(this);
        var boundChallengerChange = this.handleChallengerChange.bind(this);
        var challengerName = _.get(this.state, 'challenger.name', '');
        return (React.createElement("div", null, React.createElement("form", null, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "date", "type": "text", "className": "datepicker"}), React.createElement("label", {"htmlFor": "date"}, "Date")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger", "type": "text", "value": challengerName, "onChange": boundChallengerChange, "className": "validate"}), React.createElement("label", {"htmlFor": "challenger"}, "Challenger")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "defender"}, "Defender")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "defender_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "defender_points"}, "Defender points")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "challenger_points"}, "Challenger points")), React.createElement("div", {"className": "col s2  "}, React.createElement("input", {"id": "game_type", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "game_type"}, "Game type"))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("button", {"className": "btn waves-effect waves-light", "type": "submit", "name": "action", "onClick": boundClick}, "Submit", React.createElement("i", {"className": "material-icons right"}, "send")))))));
    }
}
exports.default = react_redux_1.connect(null, mapDispatchToProps)(AddGameView);
//# sourceMappingURL=AddGameView.js.map