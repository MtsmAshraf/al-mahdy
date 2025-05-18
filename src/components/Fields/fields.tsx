import React from 'react'
import styles from "./fields.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCity, faEarthAfrica, faGraduationCap, faHospital, faHotel, faHouseUser, faIndustry, faOilWell, faPlaneDeparture, faShop, faTrowelBricks } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
const Fields = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.fields")
  return (
    <div className={lo === "ar" ? styles.fields + " " + styles.ar : styles.fields}>
        <h2>{t("H2")}</h2>
        <div className="container">
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faTrowelBricks} />
                </div>
                <span>
                    {t("Spans.0")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <span>
                    {t("Spans.1")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faGraduationCap} />                    
                </div>
                <span>
                    {t("Spans.2")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHotel} />
                </div>
                <span>
                    {t("Spans.3")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faIndustry} />
                </div>
                <span>
                    {t("Spans.4")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCity} />
                </div>
                <span>
                    {t("Spans.5")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faOilWell} />
                </div>
                <span>
                    {t("Spans.6")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faEarthAfrica} />
                </div>
                <span>
                    {t("Spans.7")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faShop} />
                </div>
                <span>
                    {t("Spans.8")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHouseUser} />
                </div>
                <span>
                    {t("Spans.9")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHospital} />
                </div>
                <span>
                    {t("Spans.10")}
                </span>
            </div>
            <div className={styles.field}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                <span>
                    {t("Spans.11")}
                </span>
            </div>
            </div>
        </div>
  )
}

export default Fields