export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY_ACTION';
export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY_ACTION';

export function increaseQuantityActionCreator(id) {
    return { type: INCREASE_QUANTITY_ACTION, payload: { id } }
}

export function decreaseQuantityActionCreator(id) {
    return { type: DECREASE_QUANTITY_ACTION, payload: { id } }
}
