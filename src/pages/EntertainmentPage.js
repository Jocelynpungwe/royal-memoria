import React from 'react'
import entvid from '../images/hero/entvid.mp4'

import { BehindTheScene, EntertainmentInfo, ServiceHero } from '../components'

function EntertainmentPage() {
  return (
    <>
      <ServiceHero video={entvid} title="Royal Memoria Entertainment" />
      <EntertainmentInfo />
      <BehindTheScene />
      {/* the below will be a contact component for royal memoria entertainment */}
      <EntertainmentInfo />
    </>
  )
}

export default EntertainmentPage
