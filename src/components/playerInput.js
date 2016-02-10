var React = require('react');
var classNames = require('classnames');
var PlayerActions = require('../actions/players');
class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || ''
        };
    }
    handleSubmit(e) {
        const text = e.target.value.trim();
        if (e.which === 13) {
            if (this.props.newPlayer) {
                this.setState({ name: '' });
            }
        }
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    handleBlur(e) {
        this.store.dispatch(PlayerActions.addPlayer({ name: 'Test' }));
    }
    render() {
        return (React.createElement("input", {"className": classNames({
            edit: this.props.editing,
            'new-player': this.props.newPlayer
        }), "type": "text", "placeholder": this.props.placeholder, "autoFocus": true, "value": this.state.name, "onBlur": this.handleBlur.bind(this), "onChange": this.handleChange.bind(this), "onKeyDown": this.handleSubmit.bind(this)}));
    }
}
exports.default = PlayerInput;
//# sourceMappingURL=playerInput.js.map