import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thank you for your order!" />
        <p className="description">
          We are processing your payment <code>kv-34569dfg7097fn</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
