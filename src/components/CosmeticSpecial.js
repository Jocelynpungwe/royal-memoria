import React from 'react'
import styled from 'styled-components'
import comsmericCombo from '../images/cosmetic/cosmetic4.jpg'
function CosmeticSpecial() {
  return (
    <Wrapper className="section-center">
      <h2>Save upto 35% buy a combo?</h2>
      <img src={comsmericCombo} alt="cosmetic" />
      <p>Save upto 35% buy a combo S</p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  img {
    width: 100%;
  }
  p {
    color: var(--primary-gold);
  }
`
export default CosmeticSpecial
