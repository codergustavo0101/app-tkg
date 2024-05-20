import React, { useContext } from 'react'
import companyIcon from '../../images/svg/companyIcon.svg'
import bannerIcon from '../../images/svg/bannerIcon.svg'
import bannerIcon3 from '../../images/png/banner3.jpg'
import bannerIcon4 from '../../images/png/banner4.jpg'

import cartIcon from '../../images/svg/cartIcon.svg'
import { CartContext } from '../../context/cart'
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Header = ({ data }) => {

    const navigate = useNavigate()

    const { handleStateCart } = useContext(CartContext)

    const handleRedirectToLanding = () => {

        navigate("/")
    }

    return (

        <header className='header'>
            <img className='company_icon' onClick={() => handleRedirectToLanding()} src={companyIcon} />

            <Carousel autoPlay={true}  infiniteLoop width={670}  showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>

                <div>    
                <img style={{ width: "100%", height: "90px",objectFit:"cover" }} src={bannerIcon3} />
                </div>

                <div>    
                <img style={{ width: "100%", height: "90px",objectFit:"cover" }} src={bannerIcon} />
                </div>
                
                <div>    
                <img style={{ width: "100%", height: "90px",objectFit:"cover" }} src={bannerIcon4} />
                </div>
                

            </Carousel>

            <div className='container_cart'>

                <svg onClick={() => handleStateCart(true)} width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="6" width="42" height="42" rx="21" fill="black" />
                    <path d="M27.7839 28.293C27.7078 28.5723 27.4539 28.75 27.1746 28.75H19.7351L19.9128 29.5625H26.7175C27.0984 29.5625 27.4031 29.9434 27.3015 30.3242L27.1746 30.9336C27.657 31.1621 27.9871 31.6445 27.9871 32.2031C27.9871 32.9902 27.3269 33.625 26.5652 33.625C25.7781 33.625 25.1433 32.9902 25.1433 32.2031C25.1433 31.8223 25.2957 31.4668 25.5496 31.1875H20.2429C20.4968 31.4668 20.6746 31.8223 20.6746 32.2031C20.6746 32.9902 20.0144 33.625 19.2527 33.625C18.4656 33.625 17.8308 32.9902 17.8308 32.2031C17.8308 31.6953 18.1101 31.2383 18.5418 30.9844L16.739 22.25H14.9871C14.6316 22.25 14.3777 21.9961 14.3777 21.6406V21.2344C14.3777 20.9043 14.6316 20.625 14.9871 20.625H17.5769C17.8562 20.625 18.1101 20.8535 18.1863 21.1328L18.4148 22.25H28.3679C28.7742 22.25 29.0535 22.6309 28.9773 23.0117L27.7839 28.293Z" fill="white" />
                    <rect x="29.78" y="1" width="22" height="22" rx="11" fill="white" />
                    <rect x="29.78" y="1" width="22" height="22" rx="11" stroke="black" stroke-width="2" />
                </svg>


                {isNaN(data)

                    ?
                    <p className='number_cart'>0</p>
                    :
                    <p className='number_cart'>{Number(data) + 1}</p>

                }

            </div>

        </header>

    )
}

export default Header