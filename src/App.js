import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from './actions/productAction'

import HomeScreen from './screens/HomeScreen';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://technical-frontend-api.bokokode.com/api/products'
    dispatch(getAllProducts(url))
  }, []);

  const { loading, error, products } = useSelector(state => state.productList);

  return (
    <div className='main-container'>
      {loading ? <p>Loading</p> : error ? <p>Error: {error}</p> : products === undefined ? <p>Loading data...</p> : <HomeScreen />}
    </div>
  )
}

export default App;
