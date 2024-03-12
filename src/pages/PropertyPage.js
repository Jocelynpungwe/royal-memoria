import React from 'react'
import imgHero from '../images/property/propertyhero.jpg'
import {
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
      <PropertyDescription />
      <PropertyInfo />
      <PropertyContact />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PropertyPage
