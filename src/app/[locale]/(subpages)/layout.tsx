"use client"
import React, { Fragment, useEffect, useState } from 'react'
import styles from "./subpages-layout.module.css"
import { usePathname } from 'next/navigation'
const SubPagesLayout = ({
    children,
    params: {locale}
}: {
    children: React.ReactNode,
    params: {locale: string}
}) => {
    const [heroHeading, setHeroHeading] = useState("")
    const pathname = usePathname()
    useEffect(() => {
        if(pathname === `/${locale}/services`){
          const text = locale !== "en" ? "خدماتنا" : "Services"; 
          setHeroHeading(text)
        }else if(pathname === `/${locale}/projects`){
          const text = locale !== "en" ? "مشاريعنا" : "Projects"; 
          setHeroHeading(text)
        }else if(pathname === `/${locale}/products`){
          const text = locale !== "en" ? "المنتجات" : "Products"; 
          setHeroHeading(text)
        }else if(pathname === `/${locale}/about`){
          const text = locale !== "en" ? "عنا" : "About Us"; 
          setHeroHeading(text)
        }
      },[heroHeading, pathname, locale])
  return (
    <Fragment>
        <div className={locale === "ar" ? styles.hero + " " + styles.ar : styles.hero}>
            <div className={styles.overlay}></div>
            <h1>
                {heroHeading}
            </h1>
        </div>
        <main className={styles.main}>
            {children}
        </main>
    </Fragment>
  )
}

export default SubPagesLayout