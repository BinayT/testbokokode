import React from 'react'
import './styles.css'

const photos = [
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
    'https://via.placeholder.com/1200x500.png/00cc22?text=qui',
]

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