import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
    const pathname = usePathname()
    const t = useTranslations("Header")
   
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        <h3>{t("VerticalNav.Language")}</h3>
        <LangSwitch lo={lo}></LangSwitch>
        <h3>{t("VerticalNav.Pages")}</h3>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>{t("VerticalNav.Home")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/products` ? styles.active : ""} href={'/products'}>{t("VerticalNav.Products")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>{t("VerticalNav.Services")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>{t("VerticalNav.AboutUs")}</Link>
            </li>
        </ul>
        <h3>{t("VerticalNav.SocialMedia")}</h3>
        <SocialUl></SocialUl>
    </div>
  )
}

export default VerticalNav