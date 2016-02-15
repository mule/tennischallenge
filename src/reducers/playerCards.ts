import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';


import { CHALLENGER_ENTERED } from '../constants/actionTypes';

const initialState = { challenger: {name: '', visible:false}, defender: {name:'', visible:false}};
export default handleActions<IPlayerCards>({
    [CHALLENGER_ENTERED]: (state: IPlayerCards, action: Action) :IPlayerCards => {
        assign(state, {challenger: action.payload});
        return state;
    }
}, initialState);
