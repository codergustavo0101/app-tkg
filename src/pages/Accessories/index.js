import React, { useContext } from 'react'
import ContainterPageAcessories from '../../components/ContainterPageAcessories'
import Header from '../../components/Header'
import HeaderSecondary from '../../components/HeaderSecondary'
import Filter from '../../components/Filter'
import Card from '../../components/Card'
import ContainerRowFilter from '../../components/ContainerRowFilter'
import ContainerCard from '../../components/ContainerCard'
import ContainerRowCard from '../../components/ContainerRowCard'
import toyotaLogo from '../../images/svg/toyota-logo.svg'
import toyoeImage from '../../images/png/Link → e5838ee06edc24a91d26ece84ffeb1d2.jpg.png'
import { CartContext } from '../../context/cart'
import ContainerRowAcessories from '../../components/ContainerRowAcessories'
const Accessories = () => {

    const { cart, cartLenght, stateCart, handleAddToCart } = useContext(CartContext)

    return (
        <ContainterPageAcessories>
            <Header />
            <HeaderSecondary />
            <ContainerRowFilter>
                <Filter />
                <ContainerRowAcessories>
                    <Card description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$587.90"} image={toyoeImage} topImage={toyotaLogo} />
                    <Card description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$587.90"} image={toyoeImage} topImage={toyotaLogo} />
                    <Card description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$587.90"} image={toyoeImage} topImage={toyotaLogo} />

                </ContainerRowAcessories>
            </ContainerRowFilter>
        </ContainterPageAcessories>
    )
}

export default Accessories