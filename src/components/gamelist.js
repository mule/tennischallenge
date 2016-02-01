"user strict";
var React = require('react');
class GameList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var gameNodes = this.props.games.map(function (game) {
            return (React.createElement("tr", {"key": game.id}, React.createElement("td", null, game.id), React.createElement("td", null, game.date), React.createElement("td", null, game.challenger.name), React.createElement("td", null, React.createElement("game", {"className": "defender"}), "}"), React.createElement("td", null, game.challengerPoints), React.createElement("td", null, game.defenderPoints), React.createElement("td", null, game.gameType)));
        });
        return (React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Games played"), React.createElement("table", null, React.createElement("thead", null, React.createElement("th", {"data-field": "id"}, "Id"), React.createElement("th", {"data-field": "date"}, "Game date"), React.createElement("th", {"data-field": "challenger"}, "Challenger"), React.createElement("th", {"data-field": "defender"}, "Defender"), React.createElement("th", {"data-field": "challengerPoints"}, "Challenger points"), React.createElement("th", {"data-field": "defenderPoints"}, "Defender points"), React.createElement("th", {"data-field": "gameType"}, "Game type"), React.createElement("th", {"data-field": "winner"}, "Winner")), React.createElement("tbody", null, gameNodes))), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"))));
    }
}
exports.default = GameList;
//# sourceMappingURL=gamelist.js.map