import React from 'react'
import styles from "./manufacturing.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import safteyHelmet from "../../../public/imgs/manufacturing/c-zar-helmet.jpg"
import uniform from "../../../public/imgs/manufacturing/uniform.jpg"
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
            <div className={styles.part}>
                <div className={styles.partImg}>
                    <Image src={uniform} alt='Safety Uniforms'></Image>
                </div>
                <div className={styles.text}>
                    <h3>{t("Parts.1.Heading")}</h3>
                    <ul>
                        <li>{t("Parts.1.Uls.0")}</li>
                        <li>{t("Parts.1.Uls.1")}</li>
                        <li>{t("Parts.1.Uls.2")}</li>
                        <li>{t("Parts.1.Uls.3")}</li>
                    </ul>
                    <div className={styles.order}>
                        <a href="#contact">
                            {t("Parts.1.OrderBtn")}
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.part}>
                <div className={styles.partImg}>
                    <Image src={safteyHelmet} alt='Safety Helmets'></Image>
                </div>
                <div className={styles.text}>
                    <h3>{t("Parts.2.Heading")}</h3>
                    <ul>
                        <li>{t("Parts.2.Uls.0")}</li>
                        <li>{t("Parts.2.Uls.1")}</li>
                        <li>{t("Parts.2.Uls.2")}</li>
                        <li>{t("Parts.2.Uls.3")}</li>
                    </ul>
                    <div className={styles.order}>
                        <a href="#contact">
                            {t("Parts.2.OrderBtn")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Manufacturing