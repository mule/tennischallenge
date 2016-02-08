import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';


import * as types from '../constants/ActionTypes';


const addPlayer = createAction<IPlayer>(types.ADD_PLAYER);


export {addPlayer};