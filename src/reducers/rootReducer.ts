
import { combineReducers } from 'redux';

import games from './games';

const rootReducer = combineReducers({
    games: games
});

export { rootReducer };
