var lodash_1 = require('lodash');
var redux_actions_1 = require('redux-actions');
var ActionTypes_1 = require('../constants/ActionTypes');
const initialState = [{
        id: 0
    }];
exports.default = redux_actions_1.handleActions({
    [ActionTypes_1.ADD_GAME]: (state, action) => {
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
    [ActionTypes_1.DELETE_GAME]: (state, action) => {
        return state.filter(game => game.id !== action.payload.id);
    },
    [ActionTypes_1.UPDATE_GAME]: (state, action) => {
        return state.map(game => game.id === action.payload.id
            ? lodash_1.assign({}, game, {})
            : game);
    },
}, initialState);
//# sourceMappingURL=games.js.map