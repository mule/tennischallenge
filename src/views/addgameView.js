var React = require('react');
class AddGameView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null, React.createElement("form", null, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "date", "type": "text", "className": "datepicker"}), React.createElement("label", {"htmlFor": "date"}, "Date")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "challenger"}, "Challenger")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "defender", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "defender"}, "Defender")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "defender_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "defender_points"}, "Defender points")), React.createElement("div", {"className": "col s2"}, React.createElement("input", {"id": "challenger_points", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "challenger_points"}, "Challenger points")), React.createElement("div", {"className": "col s2  "}, React.createElement("input", {"id": "game_type", "type": "text", "className": "validate"}), React.createElement("label", {"htmlFor": "game_type"}, "Game type"))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s2"}, React.createElement("button", {"className": "btn waves-effect waves-light", "type": "submit", "name": "action"}, "Submit", React.createElement("i", {"className": "material-icons right"}, "send")))))));
    }
}
exports.default = AddGameView;
//# sourceMappingURL=AddGameView.js.map