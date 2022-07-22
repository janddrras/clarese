import styles from '../styles/Claresse.module.css'
import Image from 'next/image'

const Claresse = () => {
  return (
    <section className={styles.claresse} >
        <div className="container">
            <div className={styles.flex}>
                <div className={styles.text} >
                    <h4>CLARESSE</h4>
                    <p>
                        Claresse, un pește de apă dulce care provine dintr-o încrucișare naturală între două soiuri de pești din familia somnului
                        european, oferă un răspuns durabil la cererea globală în creștere.<br/>
                        Fileurile alb-roz sunt umede și blânde și au o textură fermă care se potrivește cu multe metode de preparare.<br/>
                        Claresse este cultivată în sisteme de recirculare interioare. Peștii sunt ținuți la densități optime cu o utilizare eficientă
                        a apei și a energiei și cu deversarea minimă și controlată a apelor uzate.
                    </p>
                </div>
                <Image src={"/images/claresse.jpg"} alt="somnul claresse" width={400} height={320} />
            </div>
        </div>
    </section>
  )
}

export default Claresse