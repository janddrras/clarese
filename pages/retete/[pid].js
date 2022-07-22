import Image from 'next/image'
import { useRouter } from 'next/router'
import cookbook from '../../lib/cookbook'
import styles from '../../styles/pid.module.css'

const cookbookPage = () => {
    const router = useRouter()
    const { pid } = router.query
    if (!pid) {
      return <></>
    }
    const { img, id, ingredients, time, name,recepee } = cookbook[pid-1]
    
  return (
    <section className={styles.recepee}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftCard}>
            <Image src={img} width={400} height={300} />
            <div className={styles.ingredients}>
              <ul>
                {ingredients.map((ing, idx) => {
                  return <li key={idx}>{ing}</li>
                })}
              </ul>
              <p>Timp de pregatire {time} minute</p>
            </div>
          </div>
          <div className={styles.rightCard}>
            <h1>{name}</h1>
            <ol>
                {recepee.map((ing, idx) => {
                  return <li key={idx}>{ing}</li>
                })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default cookbookPage