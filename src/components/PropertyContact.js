import React from 'react'
import styled from 'styled-components'
import imageTwo from '../images/property/property4.jpg'

function PropertyContact() {
  return (
    <Wrapper>
      <div className="section-center container">
        <div>
          <h4>Contact Us</h4>
          <p>
            Embark on a world of endless possibilities with Wanderlust
            Adventures, your premier travel agency dedicated to crafting
            extraordinary experiences. Whether you crave the sun-kissed beaches,
            majestic mountain landscapes, or vibrant cultural escapades, our
            expert team is committed to curating seamless and personalized
            journeys tailored to your desires.
          </p>
        </div>
        <img src={imageTwo} alt="test name" className="image-two" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px 0;
  background: var(--primary-gray);

  img {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 25px;
    }

    img {
      margin-top: 0;
    }
  }
`

export default PropertyContact
