import React from 'react'
import deliveryIcon from '../../images/png/entrega-rapida.png'
import ReactStars from 'react-stars'
import Input from '../Input'
import ReactPlayer from 'react-player';


import Select from '../Select'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ContainerProduct = () => {


    const YoutubeSlide = ({ url }) => (
        <ReactPlayer width="100%" height={"490px"} url={url} />
    );

    const ImageSlide = ({ src }) => (
        <img src={src} alt="Image" />
    );

    const items = [
        "https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95",
        "https://firebasestorage.googleapis.com/v0/b/storage-tkg.appspot.com/o/2240a979b0eddbab2223d5aae5a1d99e.webp?alt=media&token=041b005b-397f-41d3-936a-ee57269e2e95",
        "https://www.youtube.com/watch?v=sutEBPPYzl4",

    ];

    const getThumbnail = (url) => {
        if (url.includes('youtube')) {
            const videoId = url.split('/').pop();
            return `https://img.youtube.com/vi/${videoId}/default.jpg`;
        }
        // Se não for um vídeo do YouTube, retorna o próprio URL
        return url;
    };

    const customRenderItem = (url) => {
        if (url.includes('youtube')) {
            return <YoutubeSlide url={url} />;
        } else {
            return <ImageSlide src={url} />;
        }
    };

    const customRenderThumb = (urls) =>
        urls.map((url, index) => (
            <img key={`thumb-${index}`} src={getThumbnail(url)} alt={`Thumbnail ${index}`} />
        ));


    return (

        <div>
            <div className='container_product'>
                <div className='container_product_row'>
                    <Carousel showStatus={false} showIndicators={false} renderThumbs={() => customRenderThumb(items)}>
                        {items.map((url, index) => (
                            <div style={{ height: "490px", width: "460px" }} key={index}>{customRenderItem(url)}</div>
                        ))}
                    </Carousel>
                </div>
                <div>
                    {/* Restante do conteúdo do produto */}
                </div>

                <div>
                    <p className='textPrimaryContainerProduct'>Engate Rabicho Removivel Pajero TR4 2008 a 2013 1000Kg</p>
                    <p className='textSecondaryContainerProduct'>Disponibilidade: Pronta Entrega</p>
                    <p className='textSecondaryContainerProduct'>Capcidade de carga: 1000kg</p>
                    <p className='textSecondaryContainerProduct'>Peso Sob Esfera:  </p>
                    <p className='textPriceContainerProductPromotional'><s>De R$ 550,00</s></p>
                    <p className='textPriceContainerProduct'>Por R$ 480,00</p>

                    <Select name={"Tipos de Instalação"} />

                    <p className='textDescriptionContainerProduct'>Aquelas colisões traseiras inevitáveis são um problema, pois danificam o carro e estragam a lataria ou o para-choque. Mas com este Engate para Reboque, é possível que não sobre nenhum vestígio de dano, pois com sua estrutura em aço.</p>

                    <p className='textSecondaryContainerProduct'>Compativel com os seguintes modelos:</p>

                    <div className='row_models'>

                        <div>



                        </div>

                    </div>

                    <button className='btn_sale'>
                        Comprar Agora
                    </button>


                    <div className='container_frete'>
                        <img src={deliveryIcon} />
                        <p>CALCULAR PRAZOS E PREÇOS</p>

                        <Input placeholder={"00000-000"} mask={"99999-999"} />

                    </div>
                </div>
            </div>

            <div className='description_product'>

                <p className='text_primary_description_product'>DETALHES DO PRODUTO</p>

                <p className='text_secondary_description_product'>

                    Engate Reboque Rabicho Removível Pajero Tr4 2008 ate 2013

                    Fabricado de acordo com as especificações do fabricante do veículo.
                    Utilizando como base tubos estruturais de alta resistência, design para uma melhor fixação, segurança para o condutor e ocupantes do veículo, melhor durabilidade e proteção em colisões leves.

                    (Em caso de transbikes é necessário utilização de dois apoios no porta-malas a esfera suporta o peso de 50kg se aplicados verticalmente)

                    IMPORTANTE:
                    A instalação deverá ser realizada por um profissional da área garantindo assim a funcionalidade, aplicação e segurança no uso do produto
                    Capacidade de carga para reboque com freio: 1000kg

                    Marca: Braconi

                    * Produto certificado pelo Inmetro;
                    * Não Há necessidade de fazer furação no veiculo;
                    * Fabricado em aço altamente resistente;
                    * Ausência de superfícies cortantes ou cantos vivos na haste de fixação da esfera;
                    * Selo de identificação com informações de registro em local visível;
                    * Esfera maciça apropriada ao tracionamento de reboque ou trailer de acordo com a norma NBR ISO 1103;
                    * Tomada elétrica conforme as normas NBR 9187 de 1985 e NBR 7332 de 1998.

                    ::: Conteúdo da embalagem:::
                    * Capa Protetora (ABS) Cromada
                    * Caixa Personalizada
                    * Engate
                    * Esfera 50mm ABNT Cromada
                    * Fiação Elétrica
                    * Parafusos para Fixação
                    * Tomada (ABS) Cromada 6 Polos

                    ::: Ficha Técnica :::

                    * Peso da peça: 8,395 Kg
                    * Largura: 58cm
                    * Altura: 23cm
                    * Comprimento: 95cm
                    * Pintura: Eletro Estática
                    * Instalação: Instalado na furação original de Fábrica
                    (Sem necessidade de fazer furos no veículo)
                    * Material: Aço ASTM36 1010/1020
                    * Garantia: 3 Meses
                </p>


            </div>
        </div>
    )
}

export default ContainerProduct