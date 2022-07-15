import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero} >
        <div className="container">
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1  className='animate__zoomInDown animate__slow' >SOMN PROASPĂT</h1>
                    <h2  className='animate__zoomInDown animate__delay-2s animate__slow'>DIRECT DE LA PRODUCĂTOR</h2>
                    <p className={styles.description}>
                        Suntem o crescătorie de pește din Fântânele. <br />
                        Creștem și procesăm somn african.
                    </p>
                </div>
                <div className={styles.image}>
                    <Image src="/images/filet2.png" alt='Filet de somn' width={500} height={591} />
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Hero