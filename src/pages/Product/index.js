import React,{useContext} from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import HeaderSecondary from '../../components/HeaderSecondary'
import ContainerProduct from '../../components/ContainerProduct'
import { CartContext } from '../../context/cart'
import SidebarCart from '../../components/SidebarCart'
const Product = () => {

    const {cart,cartLenght,stateCart,handleAddToCart} = useContext(CartContext)

    return(
        <Container>
        <Header data={cartLenght}/>
        <HeaderSecondary/>
        <ContainerProduct/>
        <SidebarCart state={stateCart}/>

        </Container>

    )
}

export default Product