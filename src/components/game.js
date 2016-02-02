var React = require('react');
class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("tr", {"key": this.props.game.id}, React.createElement("td", null, this.props.game.id), React.createElement("td", null, this.props.game.date), React.createElement("td", null, this.props.game.challenger.name), React.createElement("td", null, this.props.game.defender.name), React.createElement("td", null, this.props.game.challengerPoints), React.createElement("td", null, this.props.game.defenderPoints), React.createElement("td", null, this.props.game.gameType)));
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map