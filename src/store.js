import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer } from './reducers/productReducer'
import { selectedCategoryReducer } from './reducers/filterReducer'


const reducer = combineReducers({
    productList: productListReducer,
    selectedCategory: selectedCategoryReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;