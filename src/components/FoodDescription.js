import React from 'react'
import styled from 'styled-components'
import montainImage from '../images/hero/5.png'

function FoodDescription() {
  return (
    <Wrapper>
      <img src={montainImage} alt="sea view" />
      <div className="info2">
        <h2>Unforgettable Journeys</h2>
        <p>
          Embark on a world of endless possibilities with Wanderlust Adventures,
          your premier travel agency dedicated to crafting extraordinary
          experiences. Whether you crave the sun-kissed beaches, majestic
          mountain landscapes, or vibrant cultural escapades, our expert team is
          committed to curating seamless and personalized journeys tailored to
          your desires.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 50vh;

  h2 {
    color: var(--primary-gold);
  }

  p {
    color: white;
    opacity: 0.8;
    max-width: 800px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`

export default FoodDescription
