import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from './actions/productAction'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://technical-frontend-api.bokokode.com/api/products'
    dispatch(getAllProducts(url));
  }, [dispatch]);

  return (
    <div className='main-container'>
      <p>Intial Testing</p>

    </div>
  );
}

export default App;
