import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ThematicBreak from '../ThematicBreak/ThematicBreak';
import './styles.css'

const CartBox = () => {

    const { products: { data } } = useSelector(state => state.productList);

    return (
        <div className='cart__box'>
            <div className='cart__box__product'>
                <div className='cart__box__details'>
                    <p>{data[0].name}</p>
                    <p>€ {data[0].price}</p>
                </div>
                <div className='cart__box__photo'>
                    <img src={data[0].image.src} alt={data[0].image.alt} className="cart__box__image" />
                </div>
            </div>
            <ThematicBreak />
        </div>
    )
}

export default CartBox