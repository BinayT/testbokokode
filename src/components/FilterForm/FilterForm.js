import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

import './styles.css'
import { handleCategory } from '../../actions/filterAction'
import { getAllProducts } from '../../actions/productAction'


const categories = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'];
const priceRange = ['Lower than $20', '$20 - $100', '$100 - $200', 'More than $200'];
const url = 'https://technical-frontend-api.bokokode.com/api/products'

export const CategoryForm = () => {
    const [categoryClicked, setCategoryClicked] = useState(false)
    const [firstFetch, setFirstFetch] = useState(true)
    const [categoriesSelected, setCategoriesSelected] = useState([])

    const dispatch = useDispatch();
    const { selectedCategory } = useSelector(state => state.selectedCategory);

    const categoriesSelectionHandler = (e) => {
        setCategoryClicked(!categoryClicked)
        setFirstFetch(false)
        if (categoriesSelected.includes(e)) {
            setCategoriesSelected(categoriesSelected.filter(el => el !== e));
        } else {
            setCategoriesSelected([...categoriesSelected, e])
        }
    }

    useEffect(() => {
        dispatch(handleCategory(categoriesSelected))
    }, [categoriesSelected])

    useEffect(() => {
        const body = {
            categories: selectedCategory
        }

        console.log(categoriesSelected)

        if (selectedCategory.length !== 0 || !firstFetch) {
            dispatch(getAllProducts(url, body))
        }
    }, [selectedCategory])

    return (
        <>
            <p className="checkbox__text">Category</p>
            <form>
                {categories.map(el => {
                    return (
                        <div style={{ marginBottom: '15px' }} key={el}>
                            <input type="checkbox" id={el} name={el} value={el} onClick={() => categoriesSelectionHandler(el)} />
                            <label htmlFor={el} className="label__css" >{el}</label><br />
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
                        <div style={{ marginBottom: '15px' }} key={el}>
                            <input type="checkbox" id={el} name={el} value={el} />
                            <label htmlFor={el} className="label__css" >{el}</label><br />
                        </div>
                    )
                })}
            </form>
        </>
    )
}
