import type { NextPage } from 'next'
import Head from 'next/head'

const header = {
  name: "Devin Buchanan",
  socialHandle: "@theeblacktokyo",
  link: "https://www.instagram.com/theeblacktokyo/"
}

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Devin Buchanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <h1>{header.name}</h1>
        <h2>{header.socialHandle}</h2>
      </div>
    </div>
  )
}

export default Home
