import React, { useState } from 'react'
import cartIcon from '../../images/png/add-to-cart.png'
import ReactStars from 'react-stars'

import { useNavigate } from 'react-router-dom'

const Card = ({ description, price, avaliations, image, topImage, onClick }) => {

    const navigate = useNavigate()


    const redirectToProductPage = (description, price, image) => {
        localStorage.setItem("@DESCRIPTION", description)
        localStorage.setItem("@PRICE", price)
        localStorage.setItem("@IMAGE", image)
        navigate("/product")
    }
    return (


        <>
            <div className='card' onClick={onClick} >


                <div className='descount_card' onClick={() => redirectToProductPage(description, price, image)}>
                    <p>15% off</p>

                </div>

                <div className='container_top_image_card' onClick={() => redirectToProductPage(description, price, image)}>
                    <img className='top_image_card' src={topImage} />
                </div>

                <img className='center_image_card' onClick={() => redirectToProductPage(description, price, image)} src={image} />
                <p className='text_card_description' onClick={() => redirectToProductPage(description, price, image)}>{description}</p>
                <p className='text_card_price' onClick={() => redirectToProductPage(description, price, image)}>{price}</p>

                <div className='row_button_cart'>
                    <ReactStars
                        count={5}
                        value={4.3}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />

                </div>

            </div>
        </>

    )
}

export default Card