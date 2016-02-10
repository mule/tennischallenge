import * as React from 'react';
import * as classNames from 'classnames';
import { connect } from 'react-redux';
import * as PlayerActions from '../actions/players';

interface PlayerInputProps {
    name?: string;
    placeholder?: string,
    editing?: boolean;
    newPlayer?: boolean;
}

class PlayerInput extends React.Component<PlayerInputProps, any> {
    constructor(props: PlayerInputProps) {
        super(props);
        this.state = {
            name: this.props.name || ''
        };
    }

    handleSubmit(e: any) {
        const text = e.target.value.trim();
        if (e.which === 13) {
            //this.props.onSave(text);
            if (this.props.newPlayer) {
                this.setState({name: ''});
            }
        }
    }

    handleChange(e: any) {
        this.setState({name: e.target.value});
    }

    handleBlur(e: any) {
        this.store.dispatch(PlayerActions.addPlayer({name: 'Test'}));
        //this.props.onSave(e.target.value);
    }


    render() {
        return (
            <input className={
        classNames({
          edit: this.props.editing,
          'new-player': this.props.newPlayer
        })}
                   type="text"
                   placeholder={this.props.placeholder}
                   autoFocus={true}
                   value={this.state.name}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   onKeyDown={this.handleSubmit.bind(this)}/>
        );
    }
}



export default PlayerInput;