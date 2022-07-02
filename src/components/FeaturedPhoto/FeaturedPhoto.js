import React from 'react'
import './styles.css'

const FeaturedPhoto = () => {
    return (
        <div className='featured-photo'>
            <img
                src='https://m.media-amazon.com/images/I/81ExZCXO2oL._AC_SL1500_.jpg'
                alt="Today's best"
                className='responsive'
            />

            <p className='photo-of-the-day-text'>Photo of the day</p>
        </div>

    )
}

export default FeaturedPhoto