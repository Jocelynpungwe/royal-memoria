import React from 'react'
import styled from 'styled-components'
import image from '../images/travel/travelhero.jpg'
import {
  TravelConsoltingInfo,
  TravelContact,
  TravelDescription,
  TravelInfo,
  ServiceHero,
} from '../components'

function TravelConsoltingPage() {
  return (
    <Wrapper>
      <ServiceHero image={image} title="Royal Memoria Traveling Ageny" />
      <TravelInfo />
      <TravelConsoltingInfo />
      <TravelDescription />
      <TravelContact />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default TravelConsoltingPage
