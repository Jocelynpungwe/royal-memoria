import React from 'react'
import {
  Hero,
  HomeDescription,
  Mission,
  PropertyContact,
  ServiceHero,
  Sponsors,
} from '../components'
import { goals } from '../utils/constants'
import propertyImage from '../images/hero/6.png'

function HomePage() {
  return (
    <>
      {/* <ServiceHero /> */}
      <ServiceHero
        image={propertyImage}
        title="Royal Memoria"
        description="Royal Memoria is a multinational corporation with a diverse portfolio of subsidiaries operating in multiple countries."
        about="About Us"
      />
      <Sponsors />
      <HomeDescription />
      <Mission array={goals} />
      <PropertyContact />
    </>
  )
}

export default HomePage
