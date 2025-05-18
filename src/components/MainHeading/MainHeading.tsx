import React from 'react'
import styles from "./main-heading.module.css"
const MainHeading = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className={styles.mainHeading}>{children}</div>
  )
}

export default MainHeading