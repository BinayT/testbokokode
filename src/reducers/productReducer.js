import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR,
} from '../constants/productConstants'

export const productListReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case PRODUCT_LIST_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};