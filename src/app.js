"user strict";
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var gamelist_1 = require('./components/gamelist');
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null, React.createElement("div", {"className": "navbar"}, React.createElement("nav", {"role": "navigation"}, React.createElement("div", {"className": "nav-wrapper container"}, React.createElement("a", {"href": "#!", "className": "brand-logo"}, "Tennis Challenge"), React.createElement("ul", {"className": "right hide-on-med-and-down"}, React.createElement("li", null, React.createElement("a", {"href": "sass.html"}, "Sass")), React.createElement("li", null, React.createElement("a", {"href": "badges.html"}, "Components")))))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s6"}, React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Viitoset"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"), React.createElement("a", {"href": "#"}, "This is a link")))), React.createElement("div", {"className": "col s6"}, React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Best out of three games"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"))))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s12"}, React.createElement(gamelist_1.default, null)))));
    }
}
ReactDOM.render((React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {"component": App, "path": "/"}))), document
    .getElementById('app'));
//# sourceMappingURL=app.js.map