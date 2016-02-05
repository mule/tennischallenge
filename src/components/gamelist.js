var React = require('react');
var react_router_1 = require('react-router');
var game_1 = require('./game');
class GameList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var gameNodes = this.props.games.map(function (game) {
            return (React.createElement(game_1.default, {"game": game}));
        });
        return (React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Games played"), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {"data-field": "id"}, "Id"), React.createElement("th", {"data-field": "date"}, "Game date"), React.createElement("th", {"data-field": "challenger"}, "Challenger"), React.createElement("th", {"data-field": "defender"}, "Defender"), React.createElement("th", {"data-field": "challengerPoints"}, "Challenger points"), React.createElement("th", {"data-field": "defenderPoints"}, "Defender points"), React.createElement("th", {"data-field": "gameType"}, "Game type"), React.createElement("th", {"data-field": "winner"}, "Winner"))), React.createElement("tbody", null, gameNodes))), React.createElement("div", {"className": "card-action"}, React.createElement(react_router_1.Link, {"to": "/games/add"}, "Add Game"))));
    }
}
exports.default = GameList;
//# sourceMappingURL=gamelist.js.map