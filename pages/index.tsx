import { analytics } from 'googleapis/build/src/apis/analytics';
import Head from 'next/head'
import { Hero, Navbar } from '../components';
import { getHeader } from '../services';

export default function Home({ header }: { header: any}) {
  return (
    <div className="container mx-auto max-w-screen-xl px-5">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero header={header} key={header.name}/>
    </div>
  )
}

export async function getStaticProps(){
  const header = (await getHeader()) || [];
  console.error();
  return {
    props: { header }
  }
}