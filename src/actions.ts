import { ActionCreator } from 'redux';
import { TAction } from './actionTypes';

export const increaseNumber: ActionCreator<TAction> = () => ({
    type: "INCREASE_NUMBER"
})

export const decreaseNumber: ActionCreator<TAction> = () => ({
    type: "DECREASE_NUMBER"
})

export const resetNumber: ActionCreator<TAction> = () => ({
    type: "RESET_NUMBER"
})

export const increaseNumberTo: ActionCreator<TAction> = (newValue: number) => ({
    type: "INCREASE_NUMBER_TO",
    newValue
})
