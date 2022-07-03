import React from 'react'
import './styles.css'

import dropdown from '../../assets/dropdown.svg'
import filter from '../../assets/filter.svg'
import sort from '../../assets/sort.svg'

const Sort = () => {
  return (
    <div className='sort'>
      <p style={{ marginRight: '10px' }}><img alt="Sort" src={sort} /> Sort By </p>
      <p>Price   <img alt='dropdown' src={dropdown} /></p>
    </div>
  )
}

export default Sort