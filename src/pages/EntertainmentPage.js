import React from 'react'
import entvid from '../images/hero/entvid.mp4'

import {
  BehindTheScene,
  EntertainmentInfo,
  PropertyContact,
  ServiceHero,
} from '../components'
import propertyImage from '../images/chess.png'
function EntertainmentPage() {
  return (
    <>
      <ServiceHero
        video={entvid}
        title="Royal Memoria Entertainment"
        description=" Royal Memoria Entertainment, a subsidiary of Royal Memoria, stands
              at the forefront of the modern film and media industry.We are
              dedicated to crafting nationally branded content that pushes the
              boundaries of storytelling."
      />
      <EntertainmentInfo />
      <BehindTheScene />
      <PropertyContact departmenImage={propertyImage} />
    </>
  )
}

export default EntertainmentPage
