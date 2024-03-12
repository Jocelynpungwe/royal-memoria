import React from 'react'
import styled from 'styled-components'
import foodImage from '../images/hero/5.png'
function FoodInfo() {
  return (
    <Wrapper className="section-center">
      <div className="first-container">
        <h2>what makes us special</h2>
        <p>
          What makes us special What makes us special What makes us special What
          makes us special What makes us special
        </p>
      </div>
      <div className="flex">
        <div>
          <p className="numbers">01</p>
          <h3>African original</h3>
          <p>What makes us special What makes us special</p>
        </div>
        <img src={foodImage} alt="food" />
      </div>
      <div className="flexTwo">
        <div>
          <p className="numbers">02</p>
          <h3>African original</h3>
          <p>What makes us special What makes us special</p>
          <div>
            <p className="numbers">03</p>
            <h3>African original</h3>
            <p>What makes us special What makes us special</p>
          </div>
        </div>

        <img src={foodImage} alt="food" />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 25px;
  padding: 5rem 0;
  .numbers {
    font-size: 3rem;
    color: black;
    opacity: 0.75;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }

  .first-container {
    border-bottom: 1px solid black;
    margin-left: 1rem;
  }

  .flex,
  .flexTwo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }

  .flexTwo {
    img {
      order: -1;
    }
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    .flexTwo {
      img {
        order: 0;
      }
    }
    .first-container {
      border-right: 1px solid black;
      border-bottom: none;
    }
  }
`
export default FoodInfo
