import React from 'react'
import companyIcon from '../../images/svg/companyIcon.svg'
import bannerIcon from '../../images/svg/bannerIcon.svg'
import cartIcon from '../../images/svg/cartIcon.svg'

const Header = () => {
    return (

        <header className='header'>
            <img className='company_icon' src={companyIcon}/>
            <img src={bannerIcon}/>
            <img  src={cartIcon}/>
        </header>

    )
}

export default Header