import { HANDLE_CATEGORY } from '../constants/filterConstants'

export const selectedCategoryReducer = (state = { selectedCategory: [] }, action) => {
    switch (action.type) {

        case HANDLE_CATEGORY:
            return { selectedCategory: action.payload };
        default:
            return state;
    }
};