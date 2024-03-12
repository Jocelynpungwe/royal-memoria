import React from 'react'
import styled from 'styled-components'
import cosmetciOne from '../images/cosmetic/cosmetic2.jpg'
import { Star, CheckCircleIcon, Crown } from 'lucide-react'

function CosmetciWhyUs() {
  return (
    <Wrapper className="section-center">
      <img src={cosmetciOne} alt="best skin cleaner" />

      <div>
        <h2>Why Choose Us</h2>
        <p>
          YVNG Saint Company presents a divine fusion line of religious-themed
          hoodies. Embrace a unique blend of spirit...
        </p>
        <div>
          <div className="why-container">
            <Star className="icons" />
            <div>
              <h3>YVNG Saint Company </h3>
              <p>
                YVNG Saint Company presents a divine fusion line of
                religious-themed hoodies.
              </p>
            </div>
          </div>
          <div className="why-container">
            <CheckCircleIcon className="icons" />
            <div>
              <h3>YVNG Saint Company</h3>
              <p>
                YVNG Saint Company presents a divine fusion line of
                religious-themed hoodies.
              </p>
            </div>
          </div>
          <div className="why-container">
            <Crown className="icons" />
            <div>
              <h3>YVNG Saint Company </h3>
              <p>
                YVNG Saint Company presents a divine fusion line of
                religious-themed hoodies.
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
    height: 80%;
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
