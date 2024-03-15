import React from 'react'
import styled from 'styled-components'
function HowToDonate() {
  return (
    <Wrapper>
      <h2>How To Donate</h2>
      <p>Send an interaction to: pungwememoria@gmail.com </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h2 {
    font-size: 1rem;
    color: var(--primary-gold);
  }
`
export default HowToDonate
