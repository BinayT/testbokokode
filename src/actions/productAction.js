import axios from "axios";

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR
} from '../constants/productConstants'

export const getAllProducts = (url) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.post(
            url
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_ERROR,
            payload: error.message,
        });
    }
}