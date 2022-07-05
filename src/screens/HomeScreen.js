import React from 'react'

import Featured from '../components/FeaturedSection/Featured'
import ThematicBreak from '../components/ThematicBreak/ThematicBreak'
import Products from '../components/ProductSection/Products'
import Cart from '../components/Cart/Cart'

const HomeScreen = () => {
    return (
        <>
            <Cart />
            <ThematicBreak />
            <Featured />
            <ThematicBreak />
            <Products />
        </>
    )
}

export default HomeScreen