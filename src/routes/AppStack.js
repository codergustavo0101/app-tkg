import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* PAGES */

import Landing from '../pages/Landing'
import Accessories from '../pages/Accessories'
import Product from '../pages/Product'

const AppStack = () => {
    return (

        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/accessories' element={<Accessories/>} />
                <Route path='/product' element={<Product/>} />

            </Routes>
        </BrowserRouter>



    )
}

export default AppStack
