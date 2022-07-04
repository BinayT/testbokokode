import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from './actions/productAction'

import HomeScreen from './screens/HomeScreen';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://technical-frontend-api.bokokode.com/api/products?page=2'
    dispatch(getAllProducts(url))
  }, [dispatch]);

  const { loading, error, products } = useSelector(state => state.productList);

  return (
    <div className='main-container'>
      {loading ? <p>Loading</p> : error ? <p>Error: {error}</p> : products === undefined ? <p>Loading data...</p> : <HomeScreen />}
      {/* {loading ? <p>Loading</p> : error ? <p>Error: {error}</p> : <HomeScreen />} */}
    </div>
  )
}

export default App;
