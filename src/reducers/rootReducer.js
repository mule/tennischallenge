var redux_1 = require('redux');
var games_1 = require('./games');
var playerCards_1 = require('./playerCards');
const rootReducer = redux_1.combineReducers({
    games: games_1.default,
    playerCards: playerCards_1.default
});
exports.rootReducer = rootReducer;
//# sourceMappingURL=rootReducer.js.map