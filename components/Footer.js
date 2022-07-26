import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {FaFacebookSquare, FaWhatsappSquare, FaPhone, FaEnvelope} from 'react-icons/fa'

const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false
  });

const Footer = () => {
    
  return (
    <footer className={styles.footer} >
        <div className="container">
            <div className={styles.contact} id="contact">
                <MapWithNoSSR className={styles.map}/>
                <div className={styles.contactInfo}>
                    <h3>Contactati-ne</h3>
                    <div className={styles.block}>
                        <h4>adresa</h4>
                        <p>548769 Fantanele, DJ134</p>
                    </div>
                    <div className={styles.block}>
                        <h4>contact</h4>
                        <a href='tel:+40756768738'><FaPhone /> 0756 768 738</a>
                        <a href='mailto:somn_african@yahoo.com'><FaEnvelope/> somn_african@yahoo.com</a>
                    </div>
                    <div className={styles.block}>
                        <h4>social</h4>
                        <a href='https://www.facebook.com/Somn-proasp%C4%83t-Clarese-100348102745999/' target="_blank" rel="noreferrer" aria-label="facebook button"><FaFacebookSquare className={styles.icon} /></a>
                        <a href='https://wa.me/0040756768738' target="_blank" rel="noreferrer" aria-label="whatsapp button"><FaWhatsappSquare className={styles.icon} /></a>
                    </div>

                </div>
            </div>
            <div className={styles.bottom}>
                <p>© Clarese | 2022</p>
                <Link href="/gdpr"><a>politica de confidentialitate</a></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer