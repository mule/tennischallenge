
import { combineReducers } from 'redux';

import games from './games';
import playerCards from './playerCards';

const rootReducer = combineReducers({
    games: games,
    playerCards: playerCards

});

export { rootReducer };
