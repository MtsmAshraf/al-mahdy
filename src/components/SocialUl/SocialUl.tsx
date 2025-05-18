import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Facebook" target='_blank' href="https://www.facebook.com/assimacompressors">
                <FontAwesomeIcon icon={faFacebookF}/>
            </a>
        </li>
        <li>
            <a title="Linkedin" target='_blank' href="https://www.linkedin.com/in/al-assema-compressor-52aba6227/">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </li>
        <li>
            <a title="Whatsapp" target='_blank' href="https://wa.me/201096953160">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
        <li>
            <a title="Gmail" target='_blank' href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl