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

const ProductList = () => {
    return (
        <div className='product__list'>
            {photos.map(el => (
                <div className='product__card'>
                    <img src={el} alt="Simply Image" className='product__image' />
                </div>
            ))}
        </div>
    )
}

export default ProductList