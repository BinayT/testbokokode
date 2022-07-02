import React from 'react'

import Button from '../Button/Button'
import FeaturedPhoto from '../FeaturedPhoto/FeaturedPhoto'
import FeaturedAbout from '../FeaturedAbout/FeaturedAbout'
import './styles.css'

const Featured = () => {
    return (
        <div className='featured-container'>
            <p className='title'>Samurai King Resting</p>
            <Button />
            <FeaturedPhoto />
            <FeaturedAbout />
        </div>
    )
}

export default Featured