import React from "react"

import './styles.css'

const categories = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'];
const priceRange = ['Lower than $20', '$20 - $100', '$100 - $200', 'More than $200'];


export const CategoryForm = () => {
    return (
        <>
            <p className="checkbox__text">Category</p>
            <form>
                {categories.map(el => {
                    return (
                        <div style={{ marginBottom: '15px' }}>
                            <input type="checkbox" id={el} name={el} value={el} />
                            <label for={el} className="label__css" >{el}</label><br />
                        </div>
                    )
                })}
            </form>
            <hr style={{ width: '50%', marginLeft: '0' }} />
        </>
    )
}

export const PriceRangeForm = () => {
    return (
        <>
            <p className="checkbox__text">Category</p>
            <form>
                {priceRange.map(el => {
                    return (
                        <div style={{ marginBottom: '15px' }}>
                            <input type="checkbox" id={el} name={el} value={el} />
                            <label for={el} className="label__css" >{el}</label><br />
                        </div>
                    )
                })}
            </form>
        </>
    )
}
