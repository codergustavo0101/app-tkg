import React from 'react'
import imagePrimary from '../../images/png/Section → Figure → Figure → feixe-mola-5.jpg.png'
import imageSecondary from '../../images/png/Section → Figure → Figure → munheca-karmanghia.jpg.png'

const ContainerVerticalBanner = () => {
    return(

        <div className='container_vertical_banner'>
            <img src={imagePrimary}/>
            <img src={imageSecondary}/>

        </div>

    )
}

export default ContainerVerticalBanner