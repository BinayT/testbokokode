import React from "react"
import { CategoryForm } from "../FilterForm/FilterForm"
import { PriceRangeForm } from "../FilterForm/FilterForm"
import ProductList from '../ProductList/ProductList'
import './styles.css'

const ProductMiddle = () => {
    return (
        <div className="product__middle">
            <div className="category__selection">
                <CategoryForm />
                <PriceRangeForm />
            </div>
            <ProductList />
        </div>
    )
}

export default ProductMiddle