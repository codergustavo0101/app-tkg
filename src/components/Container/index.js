import React from 'react'
import Header from '../Header'
const Container = ({children}) => {
    return(

        <div className='container_page'>  
            {children}
        </div>

    )
}

export default Container