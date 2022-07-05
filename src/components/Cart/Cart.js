import React, { useState } from 'react'

import './styles.css'
import CartSvg from '../../assets/cart.svg'
import CartBox from '../CartBox/CartBox'

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const openCartHandler = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <div className='cart__svg__container'>
            <img alt='cart' src={CartSvg} className="cart__svg__img" onClick={openCartHandler} />
            {cartOpen && <CartBox />}
        </div>
    )
}

export default Cart