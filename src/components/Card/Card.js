import React from 'react'

const Card = ({ height, src }) => {
    return (
        <div className='card'>
            <img style={{ height: height, width: '100%' }} src={src} alt='Simple Placeholder' />
        </div>
    )
}

export default Card