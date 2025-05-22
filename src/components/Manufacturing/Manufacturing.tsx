import React from 'react'
import styles from "./manufacturing.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'
const Manufacturing = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("HomePage.Manufacturing")
  return (
    <section className={lo === "ar" ? styles.manufacturing + " " + styles.ar : styles.manufacturing}>
        
        <div className="container">
            <MainHeading>
                <h2>
                    {t('MainHeading.H2')}
                </h2>
                <p>
                    {t('MainHeading.P')}
                </p>
            </MainHeading>
            <div className="container">
                
            </div>
        </div>
    </section>
  )
}

export default Manufacturing