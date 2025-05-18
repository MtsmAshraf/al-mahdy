import React from 'react'
import styles from "./products-cards.module.css"
import ProductCard from './ProductCard/ProductCard'
import allProducts, { Product } from "../allProducts"
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
const ProductCards = () => {
    const t = useTranslations("HomePage.Products")
  return (
    <div className={styles.productCards}>
        {
            allProducts.map((product: Product) => {
                return(
                    <ProductCard key={product.id}>
                        <Link href={"/products"} className={styles.productCard}>
                            <div className={styles.cardImg}>
                                <Image src={product.src} alt='Product Image'></Image>
                            </div>
                            <p>
                                {t(`ProductsCards.${product.id}`)}
                            </p>
                        </Link>
                    </ProductCard>
                )
            })
        }
    </div>
  )
}

export default ProductCards