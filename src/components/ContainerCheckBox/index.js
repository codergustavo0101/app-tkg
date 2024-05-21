import React from 'react'

const ContainerCheckBox = ({ name,id,image }) => {
    return (

        <div className='container_checkbox'>


            <div>
                <input   id={id} name={id} type='checkbox' />
                <label htmlFor={id}>{name}</label>
                {image != undefined 
                
                ?
            
                <img src={image}/>
                :
                <></>
                }
            </div>
        </div>

    )
}

export default ContainerCheckBox