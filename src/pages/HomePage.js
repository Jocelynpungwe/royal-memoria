import React from 'react'
import {
  Hero,
  HomeDescription,
  Mission,
  PropertyContact,
  Sponsors,
} from '../components'
import { goals } from '../utils/constants'
import propertyImage from '../images/chess.png'

function HomePage() {
  return (
    <>
      <Hero />
      <Sponsors />
      <HomeDescription />
      <Mission array={goals} />
      <PropertyContact departmenImage={propertyImage} />
    </>
  )
}

export default HomePage
