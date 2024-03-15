import React from 'react'
import styled from 'styled-components'
import cosmetciOne from '../images/cosmetic/2.png'
import { Star, CheckCircleIcon, Crown } from 'lucide-react'

function CosmetciWhyUs() {
  return (
    <Wrapper className="section-center">
      <img src={cosmetciOne} alt="best skin cleaner" />

      <div>
        <h2>Why Choose Us</h2>
        <p>
          Choose Royal Memoria Cosmetics for unparalleled quality, innovation,
          and luxury in beauty. Our cosmetics line is meticulously crafted with
          premium ingredients, offering exquisite formulas that deliver
          exceptional results. From vibrant pigments to nourishing skincare
          benefits, each product is designed to enhance your natural beauty and
          empower your confidence. With a commitment to excellence and a passion
          for innovation, Royal Memoria Cosmetics sets the standard for luxury
          beauty experiences. Trust us to elevate your beauty routine and
          indulge in the epitome of sophistication.
        </p>
        <div>
          <div className="why-container">
            <Star className="icons" />
            <div>
              <h3>Ingredients :</h3>
              <p>
                Our perfume stand out because of the high-quality ingredients
                used in its formulation .The scent is unique, sophisticated, and
                particularly appealing to the individual's preferences.
              </p>
            </div>
          </div>
          <div className="why-container">
            <CheckCircleIcon className="icons" />
            <div>
              <h3>Longevity:</h3>
              <p>
                Our perfume has excellent staying power.The longevity of a
                perfume is crucial for many consumers.
              </p>
            </div>
          </div>
          <div className="why-container">
            <Crown className="icons" />
            <div>
              <h3>Packaging: </h3>
              <p>
                The packaging of our perfume can greatly influence consumer's
                decision. our perfume comes in an aesthetically pleasing and
                elegant bottle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 5rem 0;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;

    img {
      order: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .why-container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 25px;
    border: 1px solid var(--secondy-gold);
    padding: 2rem;
    margin-bottom: 1rem;

    .icons {
      color: var(--primary-gold);
      width: 100%;
      height: 50px;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

export default CosmetciWhyUs
