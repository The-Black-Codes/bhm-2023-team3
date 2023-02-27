import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import Mapbox from '../components/Mapbox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Mapbox
          accessToken={
            "pk.eyJ1IjoidGZsZXRjaDU1IiwiYSI6ImNsZWx5dnQ4MTB3Y24zcm5ocndqbnIwZ2kifQ.Ag4DUV801qr57RDPpqvF5w"
          }
        />
      </main>
    </>
  );
}
