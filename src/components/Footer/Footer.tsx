import Image from 'next/image'
import React from 'react'
import logo from "../../../public/imgs/logo-removebg.webp"
import bgLogo from "../../../public/imgs/favicon.ico"
import styles from "./footer.module.css"
import SocialUl from '../SocialUl/SocialUl'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
const Footer = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Footer")
  return (
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.bgImg}>
            <Image src={bgLogo} alt='logo bg'></Image>
        </div>
        <div className={styles.footerContainer}>
            <Link href={"/"} className={styles.logo}>
                <Image src={logo} alt='Al-Assema Logo'></Image>
            </Link>
            <p>
                &copy; {t("P")}
                <br />
                {t("P2")}
            </p>
            <SocialUl></SocialUl>
            <div className={styles.devFooter}>
                by: <a target='_blank' href="https://moatasim-ashraf.netlify.app">
                    {t("DevFooter")}
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer