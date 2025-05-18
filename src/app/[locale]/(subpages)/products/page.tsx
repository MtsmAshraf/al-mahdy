"use client"
import React from 'react'
import styles from "./products.module.css"
import Products from '@/components/Products/Products'
import Contact from '@/components/Contact/Contact'
// import Testimonials from '@/components/Testimonials/Testimonials'

const ProductsPage = ({
  params: {locale}
}: {
  params: {locale: string}
}) => {
  return (
    <section className={styles.products}>
        <Products lo={locale}></Products>
        {/* <Testimonials parentEl={"products"} lo={locale}></Testimonials> */}
        <Contact lo={locale}></Contact>
    </section>
  )
}

export default ProductsPage