import React from 'react'
import deliveryIcon from '../../images/png/entrega-rapida.png'
import ReactStars from 'react-stars'
import Input from '../Input'
import Select from '../Select'
const ContainerProduct = () => {
    return (

        <div className='container_product'>

            <div className='container_product_row'>
                <img src={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"} />
            </div>
            
            <div>
                <p className='textPrimaryContainerProduct'>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>
                <p className='textSecondaryContainerProduct'>Disponibilidade: Pronta Entrega</p>
                <p className='textSecondaryContainerProduct'>Capcidade de carga: 1000kg</p>
                <p className='textSecondaryContainerProduct'>Peso Sob Esfera:  </p>
                <p className='textPriceContainerProductPromotional'><s>De R$ 550,00</s></p>
                <p className='textPriceContainerProduct'>Por R$ 480,00</p>

                <Select name={"Tipos de Instalação"}/>

                <p className='textDescriptionContainerProduct'>Aquelas colisões traseiras inevitáveis são um problema, pois danificam o carro e estragam a lataria ou o para-choque. Mas com este Engate para Reboque, é possível que não sobre nenhum vestígio de dano, pois com sua estrutura em aço.</p>

                <p className='textSecondaryContainerProduct'>Compativel com os seguintes modelos:</p>
                
                <button className='btn_sale'>
                    Comprar Agora 
                </button>


                <div className='container_frete'>
                <img src={deliveryIcon}/>
                <p>CALCULAR PRAZOS E PREÇOS</p>
                
                <Input/>

                </div>
            </div>
            
        </div>

    )
}

export default ContainerProduct