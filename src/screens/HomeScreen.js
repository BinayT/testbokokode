import React from 'react'

import Featured from '../components/FeaturedSection/Featured'
import ThematicBreak from '../components/ThematicBreak/ThematicBreak'
import Products from '../components/ProductSection/Products'

const HomeScreen = () => {
    return (
        <>
            <ThematicBreak />
            <Featured />
            <ThematicBreak />
            <Products />
        </>
    )
}

export default HomeScreen