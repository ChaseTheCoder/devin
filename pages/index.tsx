import Head from 'next/head'
import { Hero, Navbar, Mission } from '../components';
import { getHeader, getMissions } from '../services';

export default function Home({ header, mission }: { header: any, mission: any}) {
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>Devin Buchanan: Fitness, Modeling, Chicago Lifestyle</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#fffb00"/>
        <meta name="robots" content="index,follow"/>
        <meta name="description" content="Devin Buchanan's page for fitness, healthy diet, modeling, fashion, and Chicago lifestyle. Find his social links to Instagram and Tiktok, modeling portfolio, and more."/>
        <meta name="keywords" content="fitness, diet, modeling, fashing, Chicago lifestyle"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Devin Buchanan Fitness, healthy diet, modeling, fashing, Chicago lifestyle"/>
        <meta property="og:description" content="Devin Buchanan's page for fitness, healthy diet, modeling, fashion, and Chicago lifestyle. Find his social links to Instagram and Tiktok, modeling portfolio, and more."/>
        <meta property="og:url" content="https://www.devinbuchanan.com/"/>
        <meta property="og:image" content="https://media.graphassets.com/HU6DpvnlQkiJ1tYrSs6E"/>
      </Head>
      <Navbar/>
      <Hero header={header} key={header.name}/>
      <Mission mission={mission}/>
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
