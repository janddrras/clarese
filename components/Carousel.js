import { useState, useEffect} from 'react'
import { useTransition, animated } from '@react-spring/web'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io' 
import styles from '../styles/Carousel.module.css'

export default function PozeFirmaSlideshow() {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
    config: { duration: 2000 },
  })
  useEffect(() => {
    const t = setInterval(() => setIndex(state => (state + 1) % 5), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.container}>
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(/images/firma/${i}.jpg)`,
          }}
        />
      ))}
      <button aria-label="left button" style={{left: '10px'}} className={styles.button}><IoIosArrowBack onClick={() => setIndex(index - 1)} /></button>
      <button aria-label="right button" style={{right: '10px'}} className={styles.button}><IoIosArrowForward onClick={() => setIndex(index + 1)} /></button>
    </div>
  )
}