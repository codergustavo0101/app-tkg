import React from 'react'

const Select = ({name}) => {
    return(

        <div className='container_select'>
        <p>{name}</p>
        <select>
            <option value="test" style={{fontFamily:"sans serif"}}> --- Escolha ---</option>
        </select>
        </div>
    )
}

export default Select