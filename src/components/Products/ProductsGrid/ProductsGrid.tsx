"use client"
import React, { useState } from 'react'
import styles from "./products-grid.module.css"
import ProductCards from './ProductCards/ProductCards'
const ProductsGrid = ({
    lo
}: {
    lo: string
}) => {
    const [selectedCategory, setSelectedCategory] = useState("")
  return (
    <section className={lo === "ar" ? styles.productsGrid + " " + styles.ar : styles.productsGrid}>
        <div className={styles.filter}>
            <div>
                <label htmlFor="all">All</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='body' name='grid-filter' value={"body"}/>
            </div>
            <div>
                <label htmlFor="head">Head</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='head' name='grid-filter' value={"head"}/>
            </div>
            <div>
                <label htmlFor="eyes">Eyes</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='eyes' name='grid-filter' value={"eyes"}/>
            </div>
            <div>
                <label htmlFor="feet">Feet</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='feet' name='grid-filter' value={"feet"}/>
            </div>
            <div>
                <label htmlFor="hands">Hands</label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='hands' name='grid-filter' value={"hands"}/>
            </div>
        </div>
        <ProductCards category={selectedCategory}></ProductCards>
    </section>
  )
}

export default ProductsGrid