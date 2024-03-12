import React from 'react'
import styled from 'styled-components'
import cosmetciOne from '../images/cosmetic/cosmetic1.jpg'
function CosmetecDiscription() {
  return (
    <Wrapper className="section-center">
      <img src={cosmetciOne} alt="best skin cleaner" />
      <div>
        <h2>Best skin cleanser</h2>
        <p>
          YVNG Saint Company presents a divine fusion of faith and fashion with
          our exclusive line of religious-themed hoodies. Embrace a unique blend
          of spirit...
        </p>
        <div className="small-grid">
          <h3>100% Organic</h3>
          <h3>Herbal Product</h3>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 50px 0;
  margin-top: 45px;
  .small-grid {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`
export default CosmetecDiscription
