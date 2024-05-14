import React from 'react'

const ContainerCard = ({children,name}) => {
    return(

        <div className='container_card'>
            <p>{name}</p>
            {children}
        </div>

    )
}

export default ContainerCard