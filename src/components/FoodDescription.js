import React from 'react'
import styled from 'styled-components'
import montainImage from '../images/hero/5.png'

function FoodDescription() {
  return (
    <Wrapper>
      <img src={montainImage} alt="sea view" />

      <div className="info2">
        <div className="info1">
          <h2>Unforgettable Journeys</h2>
          <p>
            Embark on a world of endless possibilities with Wanderlust
            Adventures, your premier travel agency dedicated to crafting
            extraordinary experiences. Whether you crave the sun-kissed beaches,
            majestic mountain landscapes, or vibrant cultural escapades, our
            expert team is committed to curating seamless and personalized
            journeys tailored to your desires.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  color: aliceblue;
  margin-top: 35px;
  height: 50vh;
  .info1 {
    width: 70%;
    margin: 0 auto;
  }

  p {
    color: aliceblue;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info2 {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    padding: 25px;
  }
`

export default FoodDescription
