var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", {"className": "navbar-fixed"}, React.createElement("nav", null, React.createElement("div", {"className": "nav-wrapper"}, React.createElement("a", {"href": "#!", "className": "brand-logo"}, "Tennis Challenge"), React.createElement("ul", {"className": "right hide-on-med-and-down"}, React.createElement("li", null, React.createElement("a", {"href": "sass.html"}, "Sass")), React.createElement("li", null, React.createElement("a", {"href": "badges.html"}, "Components")))))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col s6"}), React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "card-title"}, "Viitoset"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information." + ' ' + "I am convenient because I require little markup to use effectively.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"), React.createElement("a", {"href": "#"}, "This is a link")))), React.createElement("div", {"className": "col s6"}, React.createElement("div", {"className": "card blue-grey darken-1"}, React.createElement("div", {"className": "card-content white-text"}, React.createElement("span", {"className": "Three points"}, "Viitoset"), React.createElement("p", null, "I am a very simple card. I am good at containing small bits of information." + ' ' + "I am convenient because I require little markup to use effectively.")), React.createElement("div", {"className": "card-action"}, React.createElement("a", {"href": "#"}, "This is a link"), React.createElement("a", {"href": "#"}, "This is a link"))))));
    };
    return App;
})(React.Component);
ReactDOM.render((React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {"component": App, "path": "/"}))), document.getElementById('app'));
//# sourceMappingURL=app.js.map