import React from 'react'
import { useSelector } from 'react-redux';

import './styles.css'

const FeaturedPhoto = () => {
    const { products } = useSelector(state => state.productList);

    const featuredPhoto = products.data.find(el => el.featured);

    const fallbackPhoto = 'https://m.media-amazon.com/images/I/81ExZCXO2oL._AC_SL1500_.jpg'

    return (
        <div className='featured-photo'>
            <img
                src={featuredPhoto !== undefined ? featuredPhoto.image.src : fallbackPhoto}
                alt="Today's best"
                className='responsive'
            />

            <p className='photo-of-the-day-text'>Photo of the day</p>
        </div>

    )
}

export default FeaturedPhoto