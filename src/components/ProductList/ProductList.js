import React from 'react'
import './styles.css'

const ProductList = ({ data }) => {
    return (
        <div className='product__list'>
            {data.map(el => (
                <div className='product__card' key={Math.random()}>
                    <img src={el.image.src} alt={el.name} className='product__image' />
                    <p className='add__to__cart__text'>
                        ADD TO CART
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ProductList