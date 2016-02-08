
import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';


import * as types from '../constants/ActionTypes';

const addGame = createAction<IGame>(
    types.ADD_GAME

);

const deleteGame = createAction<IGame>(
    types.DELETE_GAME,
    (game: IGame) => game
);

const updateGame = createAction<IGame>(
    types.UPDATE_GAME,
    (game: IGame, newDate: number) => <IGame>assign(game, {date: newDate})
);



export {
    addGame,
    deleteGame,
    updateGame
}
