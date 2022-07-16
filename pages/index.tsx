import Head from 'next/head'
import { Hero, Header } from '../components';
import { getHeader } from '../services';

export default function Home({ header }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} key={header.name}/>
      <Hero/>
    </div>
  )
}

export async function getStaticProps(){
  const header = (await getHeader()) || [];
  return {
    props: { header }
  }
}