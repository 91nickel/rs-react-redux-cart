import { ThunkAction } from "redux-thunk";
import { IProduct } from "../types/IProduct";
import { RootState } from "./store";

export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY_ACTION';
export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY_ACTION';

export const CREATE_ORDER_ACTION = 'CREATE_ORDER_ACTION';
export const CREATE_ORDER_SUCCESS_ACTION = 'CREATE_ORDER_SUCCESS_ACTION';
export const RESET_ORDER_ACTION = 'RESET_ORDER_ACTION';

interface CreateOrderAction {
    type: typeof CREATE_ORDER_ACTION;
}

interface CreateOrderSuccessAction {
    type: typeof CREATE_ORDER_SUCCESS_ACTION;
}

interface ResetOrderAction {
    type: typeof RESET_ORDER_ACTION;
}

interface IncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY_ACTION;
    payload: {
        id: IProduct['id'];
    }
}

interface DecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY_ACTION;
    payload: {
        id: IProduct['id'];
    }
}

export function increaseQuantityActionCreator(id: IProduct['id']): IncreaseQuantityAction {
    return { type: INCREASE_QUANTITY_ACTION, payload: { id } }
}

export function decreaseQuantityActionCreator(id: IProduct['id']): DecreaseQuantityAction {
    return { type: DECREASE_QUANTITY_ACTION, payload: { id } }
}

export function createOrderAction(): ThunkAction<void, RootState, void, ProjectActions> {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_ACTION });

        const res = await fetch('https://mocki.io/v1/028f7a08-1860-4639-a282-ce76bde05976')
        const data = await res.json();

        if (data.success) {
            dispatch({ type: CREATE_ORDER_SUCCESS_ACTION });
        } else {
            dispatch({ type: RESET_ORDER_ACTION });
        }
    }
}

export type ProjectActions =
    | IncreaseQuantityAction
    | DecreaseQuantityAction
    | CreateOrderAction
    | CreateOrderSuccessAction
    | ResetOrderAction;
