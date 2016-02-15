var lodash_1 = require('lodash');
var redux_actions_1 = require('redux-actions');
var actionTypes_1 = require('../constants/actionTypes');
const initialState = { challenger: { name: '', visible: false }, defender: { name: '', visible: false } };
exports.default = redux_actions_1.handleActions({
    [actionTypes_1.CHALLENGER_ENTERED]: (state, action) => {
        lodash_1.assign(state, { challenger: action.payload });
        return state;
    }
}, initialState);
//# sourceMappingURL=playerCards.js.map