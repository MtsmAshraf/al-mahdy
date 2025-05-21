"use client"
import React from 'react'
import styles from "./hero.module.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import "swiper/css/bundle";
// import 'swiper/css/navigation'; 
// import 'swiper/css/pagination'; 
// import logo from "../../../public/imgs/logojpg.webp"
import { useTranslations } from 'next-intl';
const Hero = ({
    lo
}: {
    lo: string,
}) => {
    const t = useTranslations("HomePage.Hero")
  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero}>
        <h1>
            {
                t("Heading")
            }
        </h1>
        <p>
            {
                t("P")
            }
        </p>
    </section>
  )
}

export default Hero