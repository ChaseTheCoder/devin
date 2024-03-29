import Head from 'next/head'
import { Hero, Navbar, Mission, Modeling, Footer, Equinox } from '../components';
import { getEquinox, getHeader, getMissions, getModeling } from '../services';
import useOnScreen from '../hooks/hooks';
import { useEffect, useRef, useState } from 'react';

export default function Home({ header, mission, modeling, equinox }: { header: any, mission: any, modeling: any, equinox: any}) {

  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>Devin Buchanan: Fitness & Modeling</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="robots" content="index,follow"/>
        <meta name="description" content="Devin Buchanan: Fitness & Modeling"/>
        <meta name="keywords" content="fitness, modeling, portfolio, Instagram, Tiktok, Chicago"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Devin Buchanan: Fitness & Modeling"/>
        <meta property="og:description" content="Find his social links to Instagram and Tiktok."/>
        <meta property="og:url" content="https://www.devinbuchanan.com/"/>
        <meta property="og:image" content="https://media.graphassets.com/HU6DpvnlQkiJ1tYrSs6E"/>
      </Head>
      <Navbar/>
      <Hero header={header} key={header.name}/>
      <Mission mission={mission}/>
      <Modeling modeling={modeling}/>
      <Equinox equinox={equinox}/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const header = (await getHeader()) || [];
  const mission = (await getMissions()) || [];
  const modeling = (await getModeling()) || [];
  const equinox = (await getEquinox()) || [];
  console.error();
  return {
    props: { 
      header,
      mission,
      modeling,
      equinox
    }
  }
}
