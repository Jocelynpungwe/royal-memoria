import React from 'react'
import styled from 'styled-components'
import montainImage from '../images/food/2.png'

function FoodDescription({ title, description }) {
  return (
    <Wrapper>
      <img src={montainImage} alt="sea view" />
      <div className="info2">
        <h2>{title}</h2>
        <p>{description}</p>
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
