import {INITIAL_STATE} from './state';
import {Types} from './actionTypes';

export const counter = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case Types.INCREMENT: 
            return {
                ...state,
                counter: state.counter+1
            };

        case Types.DECREMENT:
            return ({
                ...state,
                counter: state.counter -1
            });

        case Types.INCREMENT_BY: 
            return ({
                ...state,
                counter: state.counter + action.payload
            });

        case Types.DECREMENT_BY:
            return ({
                ...state,
                counter: state.counter - action.payload
            });

        case Types.RESET: 
            return ({
                ...state,
                counter: 1
            });
        default:
            return state;
    }
}