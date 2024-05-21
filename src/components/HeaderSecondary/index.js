import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import dropdownIcon from '../../images/svg/dropdownIcon.svg'
import searchIcon from '../../images/svg/searchIcon.svg'
import userIcon from '../../images/svg/userIcon.svg'
import { CartContext } from '../../context/cart'

const HeaderSecondary = () => {

    const {handleStateCart} = useContext(CartContext)


    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate("/")
    }

    const redirectToAcessoriePage = () => {
        navigate("/accessories")
    }

    const redirectToAccountPage = () => {
        navigate("/account")
    }

    const redirectToBlogPage = () => {
        navigate("/blog")
    }

    const redirectToOfferPage = () => {
        navigate("/offer")

    }

    return (

        <div className="container_header_secondary">

            <div class="dropdown">
                <button class="btn_dropdow " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Engates
                    <img src={dropdownIcon} />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

            <nav>
                <ul>
                    <li className='li_header_secondary' onClick={() => redirectToHomePage()}>Home</li>
                    <li className='li_header_secondary' onClick={() => redirectToAcessoriePage()}>Acessórios</li>
                    <li className='li_header_secondary' onClick={() => redirectToOfferPage()}>Ofertas</li>
                    <li className='li_header_secondary' onClick={() => redirectToBlogPage()}>Blog</li>
                    <li className='li_header_secondary'>Carrinho</li>
                    <li className='li_header_secondary'>Contato</li>

                </ul>
            </nav>

            <div className='header_search'>

                <div>
                    <img src={searchIcon} />
                </div>

                <div onClick={() => redirectToAccountPage()}>
                    <img src={userIcon} />
                </div>

            </div>


        </div>

    )
}

export default HeaderSecondary