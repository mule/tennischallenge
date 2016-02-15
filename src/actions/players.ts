import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';
import * as types from '../constants/ActionTypes';


export const AddPlayer = createAction<IPlayer>(types.ADD_PLAYER);
export const ChallengerEntered = createAction<IPlayerCard>(types.CHALLENGER_ENTERED);

