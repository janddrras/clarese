import styles from '../styles/Produse.module.css'
import Image from 'next/image'

const Produse = () => {
  return (
    <section className={styles.produse} id="produse" >
        <div className="container">
            <h3>Produsele noastre</h3>
            <div className={styles.cardContainer}>
                <div className={styles.prodCard}>
                  <Image src={"/images/somn-viu.jpg"} alt="somn viu pe gheata" width={400} height={400} />
                  <h4>SOMN VIU</h4>
                </div>
                <div className={styles.prodCard}>
                  <Image src={"/images/somn-filet.jpg"} alt="fileuri de somn" width={400} height={400} />
                  <h4>SOMN FILETAT</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Produse