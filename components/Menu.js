import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.menuContainer}>
          <div className={styles.logo}>
              <Link href="/">
                  <a><Image src="/images/logo.png" alt='clarese logo' width={175} height={110} /></a>
              </Link>      
          </div>
          <nav className={styles.nav} >
              <Link href="#produse"><a>produse</a></Link>
              <Link href="/despre-noi"><a>despre-noi</a></Link>
              <Link href="/retete"><a>retete</a></Link>
              <Link href="#contact"><a className='button'>contact</a></Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menu