import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';


import {
    ADD_GAME,
    DELETE_GAME,
    UPDATE_GAME,

} from '../constants/ActionTypes';

const initialState = [<IGame>{
    id: 0


}];

export default handleActions<IGame[]>({
    [ADD_GAME]: (state: IGame[], action: Action): IGame[] => {
        return [{
            id: state.reduce((maxId, game) => Math.max(game.id, maxId), -1) + 1,
            date: action.payload.date,
            challenger: action.payload.challenger,
            defender: action.payload.defender,
            challengerPoints: action.payload.challengerPoints,
            defenderPoints: action.payload.defenderPoints,
            gameType: action.payload.gameType

        }, ...state];
    },

    [DELETE_GAME]: (state: IGame[], action: Action): IGame[] => {
        return state.filter(game =>
            game.id !== action.payload.id
        );
    },

    [UPDATE_GAME]: (state: IGame[], action: Action): IGame[] => {
        return <IGame[]>state.map(game =>
            game.id === action.payload.id
                ? assign(<IGame>{}, game, { })
                : game
        );
    },


}, initialState);
