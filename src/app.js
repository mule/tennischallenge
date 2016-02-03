var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var Dashboard_1 = require('./views/Dashboard');
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var games = [
            {
                id: "1",
                gameType: 1,
                date: 100,
                challenger: { id: "1", name: "Bura" },
                defender: { id: "2", name: "Markku" },
                challengerPoints: 0,
                defenderPoints: 2
            },
            {
                id: "2",
                gameType: 2,
                date: 200,
                challenger: { id: "1", name: "Bura" },
                defender: { id: "2", name: "Markku" },
                challengerPoints: 2,
                defenderPoints: 0
            }
        ];
        return (React.createElement("div", null, React.createElement("div", {"className": "navbar"}, React.createElement("nav", {"role": "navigation"}, React.createElement("div", {"className": "nav-wrapper container"}, React.createElement("a", {"href": "#!", "className": "brand-logo"}, "Tennis Challenge"), React.createElement("ul", {"className": "right hide-on-med-and-down"}, React.createElement("li", null, React.createElement("a", {"href": "sass.html"}, "Sass")), React.createElement("li", null, React.createElement("a", {"href": "badges.html"}, "Components")))))), React.createElement("div", {"className": "detail"}, this.props.children)));
    }
}
ReactDOM.render((React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {"component": App, "path": "/"}, React.createElement(react_router_1.IndexRoute, {"component": Dashboard_1.default}), React.createElement(react_router_1.Route, {"component": AddGameView, "path": "games/add"})))), document
    .getElementById('app'));
//# sourceMappingURL=app.js.map