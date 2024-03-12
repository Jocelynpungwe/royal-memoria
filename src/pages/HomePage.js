import React from 'react'
import {
  Hero,
  HomeDescription,
  Mission,
  PropertyContact,
  Sponsors,
} from '../components'

function HomePage() {
  return (
    <>
      <Hero />
      <Sponsors />
      <HomeDescription />
      <Mission />
      <PropertyContact />
    </>
  )
}

export default HomePage
