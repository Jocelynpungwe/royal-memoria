import React from 'react'
import styled from 'styled-components'
import cosmetciOne from '../images/cosmetic/cosmetic2.jpg'

function CosmetciWhyUs() {
  return (
    <Wrapper className="section-center">
      <img src={cosmetciOne} alt="best skin cleaner" />

      <div>
        <h2>Why Choose Us</h2>
        <p>
          YVNG Saint Company presents a divine fusion of faith and fashion with
          our exclusive line of religious-themed hoodies. Embrace a unique blend
          of spirit...
        </p>
        <ol>
          <li>YVNG Saint Company presents a divine fusion</li>
          <li>YVNG Saint Company presents a divine fusion</li>
          <li>YVNG Saint Company presents a divine fusion</li>
        </ol>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 50px 0;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;

    img {
      order: 1;
    }
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`

export default CosmetciWhyUs
