import React, { useEffect } from 'react'
import imgHero from '../images/property/propertyhero.jpg'
import {
  EntertainmentInfo,
  PropertyAbout,
  PropertyContact,
  PropertyDescription,
  PropertyInfo,
  ServiceHero,
} from '../components'

import styled from 'styled-components'
import propertyImage from '../images/chess.png'
function PropertyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <ServiceHero
        image={imgHero}
        title="Property & Innovation"
        description="Royal Memoria Property is a subsidiary estate and property management that provides a range of services including home management, innovations,
          purchasing advice, and GFX digitized gallery services."
      />
      <PropertyAbout />
      <PropertyInfo />
      <PropertyContact departmentName="Property & Innovation" />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PropertyPage
