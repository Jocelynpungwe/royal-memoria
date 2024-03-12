import React from 'react'
import styled from 'styled-components'
import image from '../images/travel/travelhero.jpg'
import {
  TravelConsoltingInfo,
  TravelContact,
  TravelDescription,
  TravelInfo,
  ServiceHero,
  PropertyContact,
} from '../components'

function TravelConsoltingPage() {
  return (
    <Wrapper>
      <ServiceHero image={image} title="Royal Memoria Traveling Ageny" />
      <div className="container">
        <TravelInfo />
        <TravelConsoltingInfo />
      </div>
      <TravelDescription />
      <PropertyContact />
      {/* <TravelContact /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    padding: 5rem 0;
  }
`

export default TravelConsoltingPage
