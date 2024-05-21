import React from 'react'

const Select = ({name}) => {
    return(

        <div className='container_select'>
        <p>{name}</p>
        <select>
            <option value="test" > --- Escolha ---</option>
            <option value="test" > --- Escolha ---</option>
            <option value="test" > --- Escolha ---</option>

        </select>
        
        </div>
    )
}

export default Select