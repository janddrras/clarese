import Head from 'next/head'
import Claresse from '../components/claresse'
import Hero from '../components/Hero'
import Produse from '../components/Produse'
import Retete from '../components/Retete'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clarese | somn proaspat</title>
      </Head>
      <Hero/>
      <Produse/>
      <Claresse />
      <Retete />
    </>
  )
}
