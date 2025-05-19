"use client"
import React from 'react'
import styles from "./brands.module.css"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import logo from "../../../public/imgs/logojpg.webp"
// import sliderProducts from './sliderProducts';
import { useTranslations } from 'next-intl';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

import testImg from "../../../public/imgs/logo-removebg.webp"
import MainHeading from '../MainHeading/MainHeading';
const Brands = ({
    lo
}: {
    lo: string,
}) => {
    const t = useTranslations("HomePage.Brands")
  return (
    <section className={lo === "ar" ? styles.brands + " " + styles.ar : styles.brands}>
        <MainHeading>
            <h2>{t("MainHeading.H2")}</h2>
        </MainHeading>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 2000
                }}
                slidesPerView= {4}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                    el: `.brandsPagination`
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                className='mySwiperProdHero'
                autoHeight={true}
                >
                
                {/* {
                    sliderProducts.map((product) => {
                        return(
                            <SwiperSlide key={product.id}>
                                <div className={styles.img}>
                                    <Image src={product.src} alt={`${t(`${product.id}`)} image`}></Image>
                                </div>
                                <p>
                                    {t(`${product.id}`)}
                                </p>
                            </SwiperSlide>
                        )
                    })
                } */}
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.img}>
                        <Image src={testImg} alt={`testImg image`}></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.brandsPagination}>
                <div className={`brandsPagination`}></div>
            </div>
            {/* <button className='featured-swiper-button-prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='featured-swiper-button-next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button> */}
        </div>
    </section>
  )
}

export default Brands