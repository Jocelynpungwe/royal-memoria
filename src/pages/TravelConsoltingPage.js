import React, { useEffect } from 'react'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <ServiceHero
        image={image}
        title="Royal Travel & Tours"
        description="Royal Travel & Tours, as a subsidiary of Royal Memoria, specializes in providing smart and efficient travel solutions for both young individuals and businesses alike. With a dedication to excellence and customer satisfaction, Royal Travel & Tours aims to make the travel experience seamless and enjoyable for all its clients."
      />
      <div className="container">
        <TravelInfo />
        <TravelConsoltingInfo />
      </div>
      <TravelDescription />
      <PropertyContact departmentName="Travel & Tourism" />
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
