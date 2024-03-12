import React from 'react'
import styled from 'styled-components'
import imageCanada from '../images/travel/travelcanada.jpg'
import imageWindow from '../images/travel/travel1.avif'
function TravelInfo() {
  return (
    <Wrapper className="section-center">
      <img src={imageCanada} alt="canada city" className="first-img" />

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
      <img src={imageWindow} alt="canada city" className="second-img" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  img {
    width: 100%;
    object-fit: cover;
  }
  .first-img {
    height: 400px;
    order: 1;
    margin-top: 25px;
  }
  @media (min-width: 800px) {
    .first-img {
      order: 0;
      height: 100%;
      grid-column: 0 1;
      grid-row: span 2;
      margin-top: 0;
    }

    .second-img {
      grid-row: 0 1;
      height: 100%;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
  }
`

export default TravelInfo
