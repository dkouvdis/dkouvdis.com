import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Dimitri</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
