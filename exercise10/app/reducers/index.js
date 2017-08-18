/**
 * @fileOverview
 * @author weibin.shao
 * @date 2017/8/17
 */

import {combineReducers} from 'redux';

import { CLICK } from '../constants/ActionTypes';

const initialState = {
    number: 0
};

function click(state = initialState, action) {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                number: state.number + 1
            };
        default:
            return state;

    }
}

const rootReducer = combineReducers({
    click
});

export default rootReducer;