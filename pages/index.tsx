import Head from 'next/head'
import { Hero, Navbar } from '../components';
import { getHeader } from '../services';

export default function Home({ header }) {
  return (
    <div className="container mx-auto max-w-screen-xl px-5">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      {/* <Hero header={header} key={header.name}/> */}
    </div>
  )
}

export async function getStaticProps(){
  const header = (await getHeader()) || [];
  return {
    props: { header }
  }
}