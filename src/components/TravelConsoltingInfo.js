import React from 'react'
import styled from 'styled-components'
import imageSouthAfrica from '../images/travel/travelsouthafrica.jpg'
function TravelConsoltingInfo() {
  return (
    <Wrapper className="section-center">
      <div className="info">
        <h2>Unforgettable Journeys</h2>
        <p>
          Embark on a world of endless possibilities with Wanderlust Adventures,
          your premier travel agency dedicated to crafting extraordinary
          experiences. Whether you crave the sun-kissed beaches, majestic
          mountain landscapes, or vibrant cultural escapades, our expert team is
          committed to curating seamless and personalized journeys tailored to
          your desires. Let us turn your travel dreams into reality, ensuring
          every moment is filled with wonder and discovery. Discover the world
          with confidence, convenience, and unparalleled expertise - choose
          Wanderlust Adventures for a lifetime of unforgettable travel memories
        </p>
      </div>
      <img src={imageSouthAfrica} alt="south africa cape town table mountain" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`

export default TravelConsoltingInfo
