import Head from 'next/head'
import { NextPage } from 'next';

export default function Home() {
    return (
        <>
          <Head>
            <title>Nossos Produtos</title>
            <meta name="description" content="Conheça todos os nossos produtos" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
  
          <main>
            <h1>
              Nossos produtos
            </h1>
          </main>
        </>
    );
  }