import React from 'react'
import styles from "./services.module.css"
import Services from '@/components/Services/Services'
import Contact from '@/components/Contact/Contact'
// import Testimonials from '@/components/Testimonials/Testimonials'
const ServicesPage = ({
  params: { locale }
} : {
  params: { locale: string }
}) => {
  return (
    <section className={styles.services}>
      <Services lo={locale}></Services>
      {/* <Testimonials parentEl={"services"} lo={locale}></Testimonials> */}
      <Contact lo={locale}></Contact>
    </section>
  )
}

export default ServicesPage