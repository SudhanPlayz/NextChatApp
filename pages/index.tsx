import type { NextPage } from 'next'
import Head from 'next/head'
import Guilds from "../components/guilds"
import styles from "../styles/home.module.scss"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hideout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Guilds/>
      </div>
    </div>
  )
}

export default Home
