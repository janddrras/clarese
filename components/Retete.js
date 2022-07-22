import styles from '../styles/Retete.module.css'
import CookbookGrid from './CookbookGrid'
import Link from 'next/link'

const Retete = () => {
  return (
    <section className={styles.retete}>
        <div className="container">
            <h3>Retete</h3>
            <CookbookGrid fp={true} />
            <Link href='/retete'><a className='button'>Mai multe retete</a></Link>
        </div>
    </section>
  )
}

export default Retete