import styles from '../styles/RecepyCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const RecepyCard = ({props}) => {
    const { img, id, ingredients, time, name } = props
  return (
    <Link href={`/retete/${id}`}>
            <div className={styles.card} >
                <div className={styles.image} >
                    <Image src={img} width={300} height={200} />
                </div>
                <div className={styles.text}>
                    <h2>{name}</h2>
                    <div className={styles.footer}>
                        <p>{ingredients.join(', ')}</p>
                        <p className={styles.timp}>Timp de pregatire: {time} min</p>
                    </div>
                </div>
            </div>
    </Link>
  )
}

export default RecepyCard