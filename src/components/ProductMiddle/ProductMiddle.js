import React from "react"
import { CategoryForm } from "../FilterForm/FilterForm"
import { PriceRangeForm } from "../FilterForm/FilterForm"
import ProductList from '../ProductList/ProductList'
import './styles.css'

const ProductMiddle = ({ data }) => {
    return (
        <div className="product__middle">
            <div className="category__selection">
                <CategoryForm />
                <PriceRangeForm />
            </div>
            <ProductList data={data} />
        </div>
    )
}

export default ProductMiddle