import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import HeaderSecondary from '../../components/HeaderSecondary'
import Carrousel from '../../components/Carrousel'
import ContainerCard from '../../components/ContainerCard'
import ContainerCarrousel from '../../components/ContainerCarrousel'
import Card from '../../components/Card'
import toyotaLogo from '../../images/svg/toyota-logo.svg'
import mitsubshiLogo  from '../../images/png/Mitsubishi_motors_new_logo.svg.png'
import image from '../../images/png/Link → e5838ee06edc24a91d26ece84ffeb1d2.jpg.png'
import fiatIcon from '../../images/png/2560px-Fiat_logo.svg.png'
import image2 from '../../images/png/Link → 1b235c5c0a38c7de4a971d52250be7e5-1.jpg.png'
import image3 from '../../images/png/Link → fb7b5e9afdf5a1bb1d8c0aaeeb26df40-1.jpg.png'
import volkswagen from '../../images/png/png-transparent-volkswagen-hd-logo-removebg-preview.png'
import ContainerVerticalBanner from '../../components/ContainerVerticalBanner'
import ContainerRowCard from '../../components/ContainerRowCard'
import Footer from '../../components/Footer'
const Landing = () => {
    return(
        <Container>
            <Header/>
            <HeaderSecondary/>
            <ContainerCarrousel>
            <Carrousel/>
            <ContainerVerticalBanner/>
            </ContainerCarrousel>
            <ContainerCard name={"Engates com Rabicho Fixo"}>   
            <ContainerRowCard>
            <Card topImage={toyotaLogo} description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$587.90"} image={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"}/>
            <Card topImage={mitsubshiLogo} description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$605.90"} image={image}/>
            <Card topImage={fiatIcon} image={image2} description={"Engate Reboque Rabicho Fixo Amarok 2010 a 2021 1000Kg"}  price={"R$499.90"}/>
            <Card topImage={volkswagen} image={image3} description={"Engate Reboque Rabicho Fixo Polo Hatch 2018 a 2023 600Kg"} price={"R$335.90"}/>
            </ContainerRowCard>
            </ContainerCard>
            <ContainerCard name={"Engates com Rabicho Removível"}>   
            <ContainerRowCard>
            <Card topImage={toyotaLogo} description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$587.90"} image={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"}/>
            <Card topImage={mitsubshiLogo} description={"Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg"} price={"R$605.90"} image={image}/>
            <Card topImage={fiatIcon} image={image2} description={"Engate Reboque Rabicho Fixo Amarok 2010 a 2021 1000Kg"}  price={"R$499.90"}/>
            <Card topImage={volkswagen} image={image3} description={"Engate Reboque Rabicho Fixo Polo Hatch 2018 a 2023 600Kg"} price={"R$335.90"}/>
            </ContainerRowCard>
            </ContainerCard>
            <div style={{height:"6rem"}}></div>
            <Footer/>
        </Container>
    )
}

export default Landing