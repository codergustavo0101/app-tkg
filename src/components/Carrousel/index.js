import React from 'react'
import bannerIconPrimary from '../../images/png/banner-2-amarok.webp'
import bannerIconSecondary from '../../images/png/engate-jeep-renegade.webp'

const Carrousel = () => {
    return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={bannerIconPrimary} />

                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Engate Amarok 2022</h1>
                            <p >Engate Amarok 2022 é uma peça robusta e segura, projetada especificamente para se integrar perfeitamente ao design e às especificações técnicas </p>
                            <button className='btn_cart'>
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0497 8.8078C14.9676 9.10858 14.6942 9.29999 14.3934 9.29999H6.3817L6.57311 10.175H13.9012C14.3114 10.175 14.6395 10.5851 14.5301 10.9953L14.3934 11.6516C14.913 11.8976 15.2684 12.4172 15.2684 13.0187C15.2684 13.8664 14.5575 14.55 13.7372 14.55C12.8895 14.55 12.2059 13.8664 12.2059 13.0187C12.2059 12.6086 12.37 12.2258 12.6434 11.925H6.92858C7.20201 12.2258 7.39342 12.6086 7.39342 13.0187C7.39342 13.8664 6.68248 14.55 5.86217 14.55C5.01451 14.55 4.33092 13.8664 4.33092 13.0187C4.33092 12.4719 4.6317 11.9797 5.09655 11.7062L3.15514 2.29999H1.26842C0.885608 2.29999 0.61217 2.02655 0.61217 1.64374V1.20624C0.61217 0.850769 0.885608 0.549988 1.26842 0.549988H4.05748C4.35826 0.549988 4.6317 0.796082 4.71373 1.09686L4.95983 2.29999H15.6786C16.1161 2.29999 16.4169 2.71014 16.3348 3.1203L15.0497 8.8078Z" fill="white" />
                                </svg>

                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={bannerIconSecondary} />


                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Engate Amarok 2022</h1>
                            <p>Engate Amarok 2022 é uma peça robusta e segura, projetada especificamente para se integrar perfeitamente ao design e às especificações técnicas </p>
                            <button className='btn_cart'>
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0497 8.8078C14.9676 9.10858 14.6942 9.29999 14.3934 9.29999H6.3817L6.57311 10.175H13.9012C14.3114 10.175 14.6395 10.5851 14.5301 10.9953L14.3934 11.6516C14.913 11.8976 15.2684 12.4172 15.2684 13.0187C15.2684 13.8664 14.5575 14.55 13.7372 14.55C12.8895 14.55 12.2059 13.8664 12.2059 13.0187C12.2059 12.6086 12.37 12.2258 12.6434 11.925H6.92858C7.20201 12.2258 7.39342 12.6086 7.39342 13.0187C7.39342 13.8664 6.68248 14.55 5.86217 14.55C5.01451 14.55 4.33092 13.8664 4.33092 13.0187C4.33092 12.4719 4.6317 11.9797 5.09655 11.7062L3.15514 2.29999H1.26842C0.885608 2.29999 0.61217 2.02655 0.61217 1.64374V1.20624C0.61217 0.850769 0.885608 0.549988 1.26842 0.549988H4.05748C4.35826 0.549988 4.6317 0.796082 4.71373 1.09686L4.95983 2.29999H15.6786C16.1161 2.29999 16.4169 2.71014 16.3348 3.1203L15.0497 8.8078Z" fill="white" />
                                </svg>

                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={bannerIconPrimary} />

                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Engate Amarok.</h1>
                            <p>"Engate Amarok 2022 é uma peça robusta e segura, projetada especificamente para se integrar perfeitamente ao design e às especificações técnicas </p>
                            <button className='btn_cart'>
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0497 8.8078C14.9676 9.10858 14.6942 9.29999 14.3934 9.29999H6.3817L6.57311 10.175H13.9012C14.3114 10.175 14.6395 10.5851 14.5301 10.9953L14.3934 11.6516C14.913 11.8976 15.2684 12.4172 15.2684 13.0187C15.2684 13.8664 14.5575 14.55 13.7372 14.55C12.8895 14.55 12.2059 13.8664 12.2059 13.0187C12.2059 12.6086 12.37 12.2258 12.6434 11.925H6.92858C7.20201 12.2258 7.39342 12.6086 7.39342 13.0187C7.39342 13.8664 6.68248 14.55 5.86217 14.55C5.01451 14.55 4.33092 13.8664 4.33092 13.0187C4.33092 12.4719 4.6317 11.9797 5.09655 11.7062L3.15514 2.29999H1.26842C0.885608 2.29999 0.61217 2.02655 0.61217 1.64374V1.20624C0.61217 0.850769 0.885608 0.549988 1.26842 0.549988H4.05748C4.35826 0.549988 4.6317 0.796082 4.71373 1.09686L4.95983 2.29999H15.6786C16.1161 2.29999 16.4169 2.71014 16.3348 3.1203L15.0497 8.8078Z" fill="white" />
                                </svg>

                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default Carrousel