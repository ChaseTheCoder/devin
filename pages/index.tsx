import Head from 'next/head'
import { Hero, Navbar, Mission } from '../components';
import { getHeader, getMissions } from '../services';

export default function Home({ header, mission }: { header: any, mission: any}) {
  return (
    <div className="container mx-auto max-w-screen-xl p-5">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero header={header} key={header.name}/>
      {/* <Mission mission={mission}/> */}
    </div>
  )
}

export async function getStaticProps(){
  const header = (await getHeader()) || [];
  const mission = (await getMissions()) || [];
  console.error();
  return {
    props: { 
      header,
      mission
    }
  }
}
