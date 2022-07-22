import styles from '../../styles/retetePage.module.css'
import CookbookGrid from '../../components/CookbookGrid'

const retete = () => {
  return (
    <section className={styles.retete}>
        <div className="container">
          <h1>Retete cu somn</h1>
          <CookbookGrid fp={false}/>
        </div>
    </section>
  )
}

export default retete