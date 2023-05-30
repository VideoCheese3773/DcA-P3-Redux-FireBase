import { SomeActions } from "../types/store";
import { Actions, AppState } from "../types/store";

export const reducer = (actions:Actions, state:AppState) => {
    const {action, payload} = actions;
    switch (action) {
        case SomeActions.SAVE_PRODUCT:
            state.products = [...state.products, payload]
            console.log("reducer action/payload", {action,payload})
            return state;

        case SomeActions.GET_PRODUCT:
            state.products = payload
            console.log("reducer action/payload", {action,payload})
            return state;

        default:
            return state;
    }
}