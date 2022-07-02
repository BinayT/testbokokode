import React from 'react'

const Card = ({ height, width }) => {
    return (
        <div>
            <div>
                <img style={{ height: height, width: width }} src='https://i.pinimg.com/originals/c9/8e/9f/c98e9f4a3bd74ff93facc37030bc87c1.jpg' alt="Egg Balloon" />
            </div>
        </div>
    )
}

export default Card