import React from 'react'
import styles from "./why.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faClock, faFaceSmileBeam, faMoneyBills, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
const Why = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.why")
  return (
    <div className={lo === "ar" ? styles.why + " " + styles.ar : styles.why}>
        <h2>
            {t("h2")}
        </h2>
        <div className="container">
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                    </span>
                    <h3>
                        {t("cardsHeadings.0")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.0")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faMoneyBills} />
                    </span>
                    <h3>
                        {t("cardsHeadings.1")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.1")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faRankingStar} />
                    </span>
                    <h3>
                        {t("cardsHeadings.2")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.2")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <h3>
                        {t("cardsHeadings.3")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.3")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faAward} />
                    </span>
                    <h3>
                        {t("cardsHeadings.4")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.4")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Why