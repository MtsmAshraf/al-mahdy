"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import Image from 'next/image'
import logo from "../../../public/imgs/logo-removebg.webp"
import Nav from '../Nav/Nav'
import SocialUl from '../SocialUl/SocialUl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'
import { Link } from '@/i18n/routing'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showVNav, setShowVNav] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
      setShowVNav(false)
      console.log("false")
    },[pathname])
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
        <div className="container">
            <Link className={styles.logo} href={"/"}>
                <Image loading='lazy' src={logo} alt='Al Assema Logo'></Image>
            </Link>
            <Nav lo={lo}></Nav>
            <div className={styles.smCtrl}>
              <LangSwitch lo={lo}></LangSwitch>
              <button className={styles.bars} onClick={() => {setShowVNav(!showVNav)}}>
                  <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <button className={showVNav ? styles.close + " " + styles.shown : styles.close} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <VerticalNav lo={lo} shown={showVNav}></VerticalNav>
            <SocialUl></SocialUl>
        </div>
    </header>
  )
}

export default Header