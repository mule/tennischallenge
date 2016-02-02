
import React = require('react');

class Game extends React.Component<IGameProps,{}> {
    constructor(props: IGameProps) {
        super(props);
    }

    render() {

        return(
            <tr key={this.props.game.id}>
                <td>{this.props.game.id}</td>
                <td>{this.props.game.date}</td>
                <td>{this.props.game.challenger.name}</td>
                <td>{this.props.game.defender.name}</td>
                <td>{this.props.game.challengerPoints}</td>
                <td>{this.props.game.defenderPoints}</td>
                <td>{this.props.game.gameType}</td>
            </tr>
        );
    }
}


export default Game;