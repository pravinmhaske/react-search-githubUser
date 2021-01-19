import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './../types/types';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export function productsReducer(state = initialState, action: { type: any; payload: any; error: any; }) {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getProducts = (state: { productsReducer: { products: any; }; products: any; }) => state.productsReducer.products;
export const getProductsPending = (state: { pending: any; }) => state.pending;
export const getProductsError = (state: { error: any; }) => state.error;