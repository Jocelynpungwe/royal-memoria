import React from 'react'
import styled from 'styled-components'
import imageCanada from '../images/travel/travelcanada.jpg'
import imageWindow from '../images/travel/travel1.avif'
function TravelInfo() {
  return (
    <Wrapper className="section-center">
      <img src={imageCanada} alt="canada city" className="first-img" />

      <div className="info">
        <h2>Who are we?</h2>
        <p>
          Royal Travel is a subsidiary of Royal Memoria , it is is dedicated to
          facilitating smart and efficient travel for both young people and
          businesses, By leveraging digital experiences, we aims to simplify the
          complexities of business travel, driving program adoption, cost
          savings, and talent retention. With dedicated team members spanning
          across Canada, the Democratic Republic of Congo (DRC), Nigeria, and
          South Africa, with a goal not only to streamline travel processes but
          also to contribute to shaping a sustainable future for both business
          and tourism travel.
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

  h2 {
    color: var(--primary-gold);
  }

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
