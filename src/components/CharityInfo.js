import React from 'react'
import styled from 'styled-components'
import logo from '../images/partners/sponsor5.png'
import logoTwo from '../images/hero/5.png'
function CharityInfo() {
  return (
    <Wrapper className="section-center">
      <div className="wrapperImg">
        <img src={logo} alt="memoria logo" className="img-big" />
        <div className="second-container">
          <h2>Memoria Babys</h2>
          <p>
            The story for royal memoria The story for royal memoria The story
            for royal memoria The story for royal memoria
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 50px 0;
  @media (min-width: 800px) {
    .wrapperImg {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export default CharityInfo
