import React = require('react');


interface IPlayerCardProps {
    name;

}

class PlayerCard extends React.Component<IPlayerCardProps,{}> {
    constructor(props: IPlayerCardProps) {
        super(props);
    }

    render() {

        return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{this.props.name}</span>
                </div>
            </div>
        );
    }
}


export default PlayerCard;