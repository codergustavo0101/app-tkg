import React from 'react'
import ReactStars from 'react-stars'

import { useNavigate } from 'react-router-dom'

const Card = ({ description, price, avaliations, image, topImage }) => {
    const navigate = useNavigate()

    const redirectToProductPage = (description, price, image) => {
        localStorage.setItem("@DESCRIPTION", description)
        localStorage.setItem("@PRICE", price)
        localStorage.setItem("@IMAGE", image)
        navigate("/product")
    }
    return (

        <div className='card' onClick={() => redirectToProductPage(description, price, image)}>
            <div className='descount_card'>
                <p>15% off</p>

            </div>

            <div className='container_top_image_card'>
                <img className='top_image_card' src={topImage} />
            </div>

            <img className='center_image_card' src={image} />
            <p className='text_card_description'>{description}</p>
            <p className='text_card_price'>{price}</p>
            <ReactStars
                count={5}
                value={4.3}
                size={24}

                edit={false}
                color2={'#ffd700'} />

        </div>

    )
}

export default Card