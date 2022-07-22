import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false
  });

const Footer = () => {
    
  return (
    <footer className={styles.footer} >
        <div className="container">
            <div className={styles.contact} id="contact">
                <MapWithNoSSR/>
                <div className={styles.contactInfo}>
                    <h3>Contactati-ne</h3>
                    <div className={styles.block}>
                        <h4>adresa</h4>
                        <p>548769 Fantanele, str. Lunga nr. 54</p>
                    </div>
                    <div className={styles.block}>
                        <h4>contact</h4>
                        <p>tel: 0754 854878</p>
                        <p>email: agtre@yahoo.com</p>
                    </div>
                    <div className={styles.block}>
                        <h4>social</h4>
                        <a href='https://www.facebook.com/Somn-proasp%C4%83t-Clarese-100348102745999/'>facebook: clarese</a>
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