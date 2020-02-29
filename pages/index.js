import React from 'react'

import { Intro, IntroLong } from '../components/Intro'
import Contact from '../components/Contact'

import Timeline from '../components/Timeline'

const date = new Date()

const Home = () => (
  <React.Fragment>
    <Intro />
    <Contact />
    <IntroLong />

    <Timeline />

    <p className="text-center text-sm mt-10 mb-5">
      &copy;{date.getFullYear()} Dimitri Kouvdis
    </p>
  </React.Fragment>
)

export default Home
