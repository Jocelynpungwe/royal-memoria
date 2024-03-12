import React from 'react'
import imgHero from '../images/property/propertyhero.jpg'
import {
  EntertainmentInfo,
  PropertyContact,
  PropertyDescription,
  PropertyInfo,
  ServiceHero,
} from '../components'
import styled from 'styled-components'
function PropertyPage() {
  return (
    <Wrapper>
      <ServiceHero image={imgHero} title="Property and Innovation" />
      <EntertainmentInfo />
      <PropertyDescription />
      <PropertyInfo />
      <PropertyContact />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PropertyPage
