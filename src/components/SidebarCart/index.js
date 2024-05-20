import React, { useContext } from 'react'
import closeIcon from '../../images/png/close.png'
import { CartContext } from '../../context/cart'
const SidebarCart = ({ state }) => {

    const { handleStateCart } = useContext(CartContext)

    const handleButton = () => {
        
    }


    return (

        state == true
            ?
            <div className='container_sidebar_cart'>

                <div className='header_sidebar_cart'>
                    <img src={closeIcon} onClick={() => handleStateCart(false)} />
                    <p>Meu Carrinho</p>
                </div>



                <div className='container_cards_sidebar_cart'>
                    <div className='container_card_product'>

                        <div>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"} />
                            <p>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>

                            <p>R$ 587,90</p>
                            <div className='container_plus'>

                                <button className='button_plus'>+</button>
                                <p>0</p>
                                <button className='button_minus'>-</button>

                            </div>
                        </div>

                    </div>

                    <div className='container_card_product'>

                        <div>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"} />
                            <p>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>

                            <p>R$ 587,90</p>
                            <div className='container_plus'>

                                <button className='button_plus'>+</button>
                                <p>0</p>
                                <button className='button_minus'>-</button>

                            </div>
                        </div>

                    </div>

                </div>
            

                <div className='bottom_price_sidebar'>
                <p className='total_cart'>Total R$ 1.174,00</p>
                </div>

                <div className='container_button_sidebar_cart'>
                    <button>Prosseguir</button>
                </div>

            </div>
            :
            <div className='container_sidebar_cart_close'>
                <div className='header_sidebar_cart'>
                    <img src={closeIcon} onClick={() => handleStateCart(false)} />
                    <p>Meu Carrinho</p>
                </div>



                <div className='container_cards_sidebar_cart'>
                    <div className='container_card_product'>

                        <div>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"} />
                            <p>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>

                            <p>R$ 587,90</p>
                            <div className='container_plus'>

                                <button className='button_plus'>+</button>
                                <p>0</p>
                                <button className='button_minus'>-</button>

                            </div>
                        </div>

                    </div>

                    <div className='container_card_product'>

                        <div>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95"} />
                            <p>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>

                            <p>R$ 587,90</p>
                            <div className='container_plus'>

                                <button className='button_plus'>+</button>
                                <p>0</p>
                                <button className='button_minus'>-</button>

                            </div>
                        </div>

                    </div>

                </div>

                <p className='total_cart'>Total R$ 587,90</p>

                <div className='container_button_sidebar_cart'>
                    <button>Prosseguir</button>
                </div>
            </div>


    )
}

export default SidebarCart