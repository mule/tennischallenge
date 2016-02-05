import React = require('react');

class AddGameView extends React.Component<any,any> {
    constructor(props: any) {
        super(props);

    }

    render() {

        return (

            <div>
                <form>
                    <div className="row">
                        <div className="col s2">
                            <input id="date" type="text" className="datepicker"/>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="col s2">
                            <input id="challenger" type="text" className="validate"/>
                            <label htmlFor="challenger">Challenger</label>
                        </div>
                        <div className="col s2">
                            <input id="defender" type="text" className="validate"/>
                            <label htmlFor="defender">Defender</label>
                        </div>
                        <div className="col s2">
                            <input id="defender_points" type="text" className="validate"/>
                            <label htmlFor="defender_points">Defender points</label>
                        </div>
                        <div className="col s2">
                            <input id="challenger_points" type="text" className="validate"/>
                            <label htmlFor="challenger_points">Challenger points</label>
                        </div>
                        <div className="col s2  ">
                            <input id="game_type" type="text" className="validate"/>
                            <label htmlFor="game_type">Game type</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s2">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddGameView;