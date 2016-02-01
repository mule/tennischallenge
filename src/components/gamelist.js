"user strict";
var React = require('react');
class GameList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "List of games"), React.createElement("p", null, "Games table would be here.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"))));
    }
}
exports.default = GameList;
//# sourceMappingURL=gamelist.js.map