import React from 'react'
import styled from 'styled-components'
import logo from '../images/partners/sponsor5.png'
import logoTwo from '../images/hero/5.png'
import HowToDonate from './HowToDonate'
function CharityInfo() {
  return (
    <Wrapper className="section-center">
      <div className="wrapperImg">
        <img src={logo} alt="memoria logo" className="img-big" />
        <div className="second-container">
          <h2>Memoria Babys</h2>
          <p>
            Memoria Baby" is a nonprofit organization dedicated to caring for
            homeless children by playing a crucial role in providing support,
            shelter, and resources to vulnerable children who may not have a
            stable living environment. We are aiming to make a positive impact
            on the lives of those in need.
          </p>
          <HowToDonate />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem 0;
  h2 {
    color: var(--primary-gold);
  }

  .second-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

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
