import Head from 'next/head'
import Hero from '../components/Hero'
import Produse from '../components/Produse'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clarese | somn proaspat</title>
      </Head>
      <Hero/>
      <Produse/>
    </>
  )
}
