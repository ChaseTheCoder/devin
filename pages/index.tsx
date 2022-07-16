import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, Header } from '../components';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
    </div>
  )
}

export default Home
