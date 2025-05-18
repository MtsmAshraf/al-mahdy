import React from 'react'
import styles from "./main-btn.module.css"
const MainBtn = ({
    children,
    lo
} : {
    children: React.ReactNode,
    lo: string
}) => {
  return (
    <button className={lo === "ar" ? styles.mainBtn + " " + styles.ar : styles.mainBtn}>
        {children}
    </button>
  )
}

export default MainBtn