import { initialProducts } from '../initialProducts.js';
import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from './actions.js'

export function productsReducer(state = initialProducts, action) {
    switch (action.type) {
        case INCREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }

                return product;
            })

        case DECREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id && product.quantity > 0) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }

                return product;
            })

        default:
            break;
    }

    return state;
}
