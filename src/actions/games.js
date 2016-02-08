var redux_actions_1 = require('redux-actions');
var lodash_1 = require('lodash');
var types = require('../constants/ActionTypes');
const addGame = redux_actions_1.createAction(types.ADD_GAME);
exports.addGame = addGame;
const deleteGame = redux_actions_1.createAction(types.DELETE_GAME, (game) => game);
exports.deleteGame = deleteGame;
const updateGame = redux_actions_1.createAction(types.UPDATE_GAME, (game, newDate) => lodash_1.assign(game, { date: newDate }));
exports.updateGame = updateGame;
//# sourceMappingURL=games.js.map