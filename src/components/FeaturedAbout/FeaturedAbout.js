import React from 'react'

import './styles.css'

import Card from '../Card/Card'

const FeaturedAbout = ({ featuredData, peopleAlsoBuy }) => {

    const fallbackDesc = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
    const fallbackCategory = 'Category Name'
    const fallbackName = 'Samurai King Resting'

    return (
        <div className='featured-about'>
            <div className='about__desc'>
                <p>About the {featuredData !== undefined ? featuredData.name : fallbackName}</p>
                <p style={{ textTransform: 'capitalize' }}>{featuredData !== undefined ? featuredData.category : fallbackCategory}</p>
                <p>{featuredData !== undefined ? featuredData.description : fallbackDesc}</p>
            </div>
            <div className='about__suggestion'>
                <p className='pab__text'>People also buy</p>
                <div className='about__suggestion__cards'>
                    {peopleAlsoBuy.data.slice(0, 3).map(el =>
                        <Card height='100px' src={el.image.src} />)}
                    {/* <Card height='100px' />
                    <Card height='100px' />
                    <Card height='100px' /> */}
                </div>
                <div className='pab__text'>
                    <p>Details</p>
                    <p>Size:1020 x 1020 pixel</p>
                    <p>Size:15 mb</p>
                </div>
            </div>

        </div>
    )
}

export default FeaturedAbout