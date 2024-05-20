import React from 'react'
import InputMask from 'react-input-mask';

const Input = ({placeholder,mask}) => {
    return(

        <InputMask className='input_frete' mask={mask} placeholder={placeholder}/>

    )
}

export default Input