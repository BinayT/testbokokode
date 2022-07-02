import React from 'react'
import './styles.css'

import Card from '../Card/Card'

const FeaturedAbout = () => {
    return (
        <div className='featured-about'>
            <div className='about__desc'>
                <p>About Section</p>
                <p>Category Name</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text.
                </p>
            </div>
            <div className='about__suggestion'>
                <p className='pab__text'>People also buy</p>
                <div className='about__suggestion__cards'>
                    <Card height='100px' width='auto' />
                    <Card height='100px' width='auto' />
                    <Card height='100px' width='auto' />
                </div>
            </div>
        </div>
    )
}

export default FeaturedAbout