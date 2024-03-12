import React from 'react'
import entvid from '../images/hero/entvid.mp4'

import {
  BehindTheScene,
  EntertainmentInfo,
  PropertyContact,
  ServiceHero,
} from '../components'

function EntertainmentPage() {
  return (
    <>
      <ServiceHero video={entvid} title="Royal Memoria Entertainment" />
      <EntertainmentInfo />
      <BehindTheScene />
      <EntertainmentInfo />
      <PropertyContact />
    </>
  )
}

export default EntertainmentPage
