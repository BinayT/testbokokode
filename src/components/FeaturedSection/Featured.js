import React from 'react'
import { useSelector } from 'react-redux';

import Button from '../Button/Button'
import FeaturedPhoto from '../FeaturedPhoto/FeaturedPhoto'
import FeaturedAbout from '../FeaturedAbout/FeaturedAbout'
import './styles.css'

const Featured = () => {
    const { products } = useSelector(state => state.productList);

    const featuredProduct = products.data.find(el => el.featured);

    return (
        <div className='featured-container'>
            <p className='title'>{featuredProduct !== undefined ? featuredProduct.name : 'Samurai King Resting'}</p>
            <Button />
            <FeaturedPhoto data={featuredProduct} />
            <FeaturedAbout data={featuredProduct} />
        </div>
    )
}

export default Featured