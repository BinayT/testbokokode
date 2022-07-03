import React from 'react'

import './styles.css'

const FeaturedPhoto = ({ data }) => {
    const fallbackPhoto = 'https://m.media-amazon.com/images/I/81ExZCXO2oL._AC_SL1500_.jpg'

    return (
        <div className='featured-photo'>
            <img
                src={data !== undefined ? data.image.src : fallbackPhoto}
                alt="Today's best"
                className='responsive'
            />

            <p className='photo-of-the-day-text'>Photo of the day</p>
        </div>

    )
}

export default FeaturedPhoto