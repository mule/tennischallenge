var React = require('react');
var gamelist_1 = require('../components/gamelist');
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var games = [
            { id: 1,
                gameType: 1,
                date: 100,
                challenger: { id: "1", name: "Bura" },
                defender: { id: "2", name: "Markku" },
                challengerPoints: 0,
                defenderPoints: 2
            },
            {
                id: 2,
                gameType: 2,
                date: 200,
                challenger: { id: "1", name: "Bura" },
                defender: { id: "2", name: "Markku" },
                challengerPoints: 2,
                defenderPoints: 0
            }
        ];
        return (React.createElement("div", null, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s6"}, React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Viitoset"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"), React.createElement("a", {"href": "#"}, "This is a link")))), React.createElement("div", {"className": "col s6"}, React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Best out of three games"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"))))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s12"}, React.createElement(gamelist_1.default, {"games": games})))));
    }
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map