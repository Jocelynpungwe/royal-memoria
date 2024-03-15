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

import propertyImage from '../images/chess.png'

function TravelConsoltingPage() {
  return (
    <Wrapper>
      <ServiceHero
        image={image}
        title="Royal Memoria Travel & Toursm"
        description="Royal Travel & Toursm is a subsidiary of Royal Memoria , it is is dedicated to facilitating smart and efficient travel for both young people and businesses"
      />
      <div className="container">
        <TravelInfo />
        <TravelConsoltingInfo />
      </div>
      <TravelDescription />
      <PropertyContact departmenImage={propertyImage} />
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
