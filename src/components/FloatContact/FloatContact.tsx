"use client"
import React, { useEffect, useState } from 'react'
import styles from "./float-contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'use-intl'
const FloatContact = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("FloatContact")
    const [active, setActive] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setActive(true)
        }, 60000);
        setTimeout(() => {
            setInterval(() => {
                setActive(false)
            }, 60000);
        }, 3000);
    }, [])
  return (
        <div className={lo === "ar" ? styles.parent + " " + styles.ar : styles.parent}>

            <span onClick={(e) => {
                e.stopPropagation(); 
                e.preventDefault();
                setActive(false);
            }} className={active ? styles.overlay + " " + styles.shown : styles.overlay}></span>

            <button className={active ? styles.floatContact + " " + styles.active : styles.floatContact}>
                <FontAwesomeIcon icon={faInfo} />
                <div>
                    <span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                    <div>
                        <a target='_blank' href="https://wa.me/201017047579">
                            {t("Services")}
                        </a>
                        <a target='_blank' href="https://wa.me/201096953160">
                            {t("Sales")}
                        </a>
                    </div>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div>
                        <a target='_blank' href="tel:+201017047579">
                            {t("Services")}
                        </a>
                        <a target='_blank' href="tel:+201000220174">
                            {t("Sales")}
                        </a>
                    </div>
                </div>
            </button>
        </div>
  )
}

export default FloatContact