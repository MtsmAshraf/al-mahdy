import React from 'react'
import styles from "./nav.module.css"
import LangSwitch from './LangSwitch/LangSwitch'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>{t("Nav.Home")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/products` ? styles.active : ""} href={'/products'}>{t("Nav.Products")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>{t("Nav.Services")}</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>{t("Nav.AboutUs")}</Link>
            </li>
        </ul>
        <LangSwitch lo={lo}></LangSwitch>
    </nav>
  )
}

export default Nav