import React from 'react'
import ProductTop from '../ProductTop/ProductTop'
import ProductMiddle from '../ProductMiddle/ProductMiddle'
import { useSelector } from 'react-redux';

const Products = () => {
    const { products: { data } } = useSelector(state => state.productList);

    return (
        <>
            <ProductTop />
            <ProductMiddle data={data} />
        </>
    )
}

export default Products