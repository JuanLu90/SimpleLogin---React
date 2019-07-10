import { TAction } from '../actionTypes';

const initialState: number = 0;


export const valueReducer = (
    state: number = initialState,
    action: TAction
): number => {
    if (action.type === "DECREASE_NUMBER") {
        return state - 1;
    } else if (action.type === "INCREASE_NUMBER") {
        return state + 1;
    } else if (action.type === "INCREASE_NUMBER_TO") {
        return action.newValue;
    } else if (action.type === "RESET_NUMBER") {
        return initialState;
    }
    return state;
};