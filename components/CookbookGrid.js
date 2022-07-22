import RecepyCard from './RecepyCard'
import styles from '../styles/CookbookGrid.module.css'
import cookbook from '../lib/cookbook'

const CookbookGrid = ({fp}) => {
    let arr = []
 
    if (fp) {
        arr = cookbook.slice(0, 3)
    } else {
        arr = cookbook
    }

    
  return (
    <div className='container'>
        <div className={styles.grid} >
            {arr.map(rec => {
                return <RecepyCard props={rec} key={rec.id}/>
            })}
          </div>
    </div>
  )
}

export default CookbookGrid