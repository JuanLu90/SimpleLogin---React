type TIncrementAction = {
    type: "INCREASE_NUMBER";
};

type TDecrementAction = {
    type: "DECREASE_NUMBER";
};

type TResetAction = {
    type: "RESET_NUMBER";
};

type TIncrementToAction = {
    type: "INCREASE_NUMBER_TO";
    newValue: number;
};

export type TAction =
    TIncrementAction
    | TDecrementAction
    | TResetAction
    | TIncrementToAction;