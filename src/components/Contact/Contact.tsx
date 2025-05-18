import React from 'react'
import styles from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'
const Contact = ({
  lo
}: {
  lo: string
}) => {
  const t = useTranslations("HomePage")
  return (
    <section className={lo === "ar" ? styles.contact + " " + styles.ar : styles.contact}>
        <h1>
          {t("Contact.MainHeading.H2")}
        </h1>
        <div className="container">
          <div className={styles.info}>
              <div>
                {/* <h3>
                  Phone
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+201000220174">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Sales')}
                      </span>  
                      <a target='_blank' href="tel:+201000220174">
                        +201000220174
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+201017047579">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <div>
                      <span>
                        {t('Contact.Contacts.Services')}
                      </span>  
                      <a target='_blank' href="tel:+201017047579">
                        +201017047579
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
              <div>
                {/* <h3>
                  Whatsapp
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/201096953160">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Sales')}
                        </span>  
                      <a target='_blank' href="https://wa.me/201096953160">
                        +201096953160
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/201017047579">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div>
                      <span>
                        {t('Contact.Contacts.Services')}
                      </span>  
                      <a target='_blank' href="https://wa.me/201017047579">
                        +201017047579
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
              <div>
                {/* <h3>
                  Email
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <div>
                      <a target='_blank' href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                        assemaforcompressor@gmail.com
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
          </div>
          <div className={styles.location}>
            <h2>
              {t('Contact.Location.Heading')}
            </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d414.3288295725461!2d31.744258204099847!3d30.30087004400621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE4JzAyLjciTiAzMcKwNDQnMzkuNiJF!5e0!3m2!1sen!2seg!4v1731843692990!5m2!1sen!2seg" 
              allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.address}>
              <address>
                <FontAwesomeIcon icon={faLocationDot} />  {t('Contact.Location.Address.Line1')},
                <br />
                {t('Contact.Location.Address.Line2')},
                <br />
                {t('Contact.Location.Address.Line3')},
                <br />
                {t('Contact.Location.Address.Line4')}
              </address>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div>
            <SocialUl></SocialUl>
          </div>
        </div>
    </section>
  )
}

export default Contact