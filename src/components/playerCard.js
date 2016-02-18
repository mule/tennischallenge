var React = require('react');
class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, this.props.name))));
    }
}
exports.default = PlayerCard;
//# sourceMappingURL=PlayerCard.js.map