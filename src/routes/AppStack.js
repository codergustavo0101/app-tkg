import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* PAGES */

import Landing from '../pages/Landing'
import Accessories from '../pages/Accessories'
import Product from '../pages/Product'
import Account from '../pages/Account'
import Offer from '../pages/Offer'
import Blog from '../pages/Blog'

const AppStack = () => {
    return (

        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/accessories' element={<Accessories/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/offer' element={<Offer/>} />
                <Route path='/blog' element={<Blog/>} />

            </Routes>
        </BrowserRouter>



    )
}

export default AppStack
