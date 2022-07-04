import React from 'react'
import './styles.css'

import Sort from '../SortComponent/Sort'

const ProductTop = () => {
    return (
        <div className='product__top'>
            <p><span className='photography__text'>Photography / </span><span className='premium__photo__text'>Premium Photos</span></p>
            <Sort />
        </div>
    )
}

export default ProductTop