import React from 'react'
import styles from "./products-grid.module.css"
import ProductCards from './ProductCards/ProductCards'
const ProductsGrid = ({
    lo
}: {
    lo: string
}) => {
  return (
    <section className={lo === "ar" ? styles.productsGrid + " " + styles.ar : styles.productsGrid}>
        {/* <div className={styles.filter}>
            <div>
                <label htmlFor="all">All</label>
                <input defaultChecked type="radio" id='all' name='grid-filter'/>
            </div>
            <div>
                <label htmlFor="cat1">category 1</label>
                <input type="radio" id='cat1' name='grid-filter'/>
            </div>
            <div>
                <label htmlFor="cat2">category 2</label>
                <input type="radio" id='cat2' name='grid-filter'/>
            </div>
        </div> */}
        <ProductCards></ProductCards>
    </section>
  )
}

export default ProductsGrid