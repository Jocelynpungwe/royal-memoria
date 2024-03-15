import React from 'react'
import styled from 'styled-components'
import cosmetciOne from '../images/cosmetic/1.png'
function CosmetecDiscription() {
  return (
    <Wrapper className="section-center">
      <img src={cosmetciOne} alt="best skin cleaner" />
      <div>
        <h2>Royal MakeUp</h2>
        <p>
          With our Brand Memoria’s Secret , We provides high-quality makeup
          products.We have created a unique formulations that offer benefits not
          found in other products.Offering a wide range of shades to cater to
          diverse skin tones.
        </p>
        <img src={cosmetciOne} alt="best skin cleaner" />
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

  h3 {
    color: var(--primary-gold);
  }
`
export default CosmetecDiscription
