import styles from '../styles/Produse.module.css'

const Produse = () => {
  return (
    <section className={styles.produse} id="produse" >
        <div className="container">
            <h3>Produsele noastre</h3>
            <div className={styles.cardContainer}>
                <div className={styles.prodCard}>g</div>
            </div>
        </div>
    </section>
  )
}

export default Produse