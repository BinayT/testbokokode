import { HANDLE_CATEGORY } from '../constants/filterConstants'

export const handleCategory = (category) => async (dispatch) => {
    dispatch({ type: HANDLE_CATEGORY, payload: category });
}