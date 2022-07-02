import axios from "axios";

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR
} from '../constants/productConstants'

export const getAllProducts = async (url) => {
    const { data } = await axios.post('https://technical-frontend-api.bokokode.com/api/products')
    return data
}