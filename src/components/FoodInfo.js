import React from 'react'
import styled from 'styled-components'
import foodImageOne from '../images/food/1.png'
import foodImageTwo from '../images/food/3.png'
function FoodInfo() {
  return (
    <Wrapper className="section-center">
      <div className="first-container">
        <h2>what makes us special</h2>
        <p>
          "M Kitoko," a brand and restaurant managed by Royal Memoria. Founded
          in Johannesburg, South Africa, in 2020, M Kitoko specializes in
          burgers, featuring grilled peri-peri style chicken and Peri- Peri
          meat. Peri-peri style refers to a type of spicy marinade or sauce
          commonly used in African cuisine, especially in countries like
          Mozambique and South Africa. This combination of flavors likely offers
          customers a unique and flavorful dining experience.
        </p>
      </div>
      <div className="flex">
        <div>
          <p className="numbers">01</p>
          <h3>Unique Ingredients</h3>
          <p>
            the unique process and ingredients used by M kitoko in marinating
            chicken and meat makes it special
          </p>
        </div>
        <img src={foodImageOne} alt="food" />
      </div>
      <div className="flexTwo">
        <div>
          <p className="numbers">02</p>
          <h3>Marination</h3>
          <p>
            {' '}
            Marinating for 24 hours allows the flavors to penetrate the meat
            deeply, resulting in a more flavorful and tender dish.
          </p>
          <div>
            <p className="numbers">03</p>
            <h3>Flavour</h3>
            <p>
              Using fresh, real ingredients without artificial flavors or
              colorants ensures the quality and authenticity of the final
              product. This attention to detail and commitment to quality likely
              contributes to M kitoko's legendary reputation.
            </p>
          </div>
        </div>

        <img src={foodImageTwo} alt="food" />
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
