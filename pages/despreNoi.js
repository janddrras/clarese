import styles from '../styles/despre.module.css'
import Carousel from '../components/Carousel'

const despreNoi = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1>Despre noi</h1>
        <div className={styles.content}>
          <div className={styles.carousel}>
            <Carousel />
          </div>
          <div className={styles.text}>
            <p>
              Firma noastră a fost fondată în 1993. Domeniul principal de activitate este creșterea, prelucrarea și distribuția somnului Claresse. Produce somnul pe care îl crește într-o manieră complet verticală, în consecință desfășoară activitățile de păstrare, reproducere, reproducere, creștere a puilor, puieți și pești comerciali, distribuție comercială a peștelui, procesare, livrare și vânzare a peștelui. . . Aceasta presupune specialiști bine pregătiți, personal pregătit și un grad ridicat de cooperare între locații. Absolvenții Kft. sunt absolvenți de inginerie agricolă, inginerie piscicolă sau inginerie industriei alimentare, care sunt deschiși la lucruri noi și participă în mod regulat la activități de cercetare și dezvoltare fie în cadrul companiei, fie în cooperare cu alte organizații sau parteneri.
              Datorită abordării lor complexe, acordă multă atenție dezvoltării fundamentelor biologice și fundației tehnice ale tehnologiei. Somnul african comercializat în țara noastră este produs în Ungaria, în principal la locațiile -Fish Kft. din  și Tuká. Carnea somnului african este atrăgător de roz, săracă în grăsimi și, în același timp, fără fibre și poate fi recomandată copiilor și vârstnicilor. -Fish Kft. produce produse proaspete și congelate de diferite grade de prelucrare exclusiv din propriul somn african. Are două fabrici de procesare a peștelui în Tiszacsege și . Compania prelucrează somnul african produs la fermele sale piscicole din Tuka și  în fabricile sale de procesare și nu cumpără materii prime din alte surse. Scopul de bază al managementului este de a câștiga și menține încrederea clienților săi cu produse fiabile, de înaltă calitate din punct de vedere al siguranței alimentare.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default despreNoi