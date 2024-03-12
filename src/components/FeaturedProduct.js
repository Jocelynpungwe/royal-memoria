import React from 'react'
import styled from 'styled-components'
import Product from './Product'

function FeaturedProduct({ array = [[]] }) {
  return (
    <Wrapper className="section">
      <div className="section-center featured">
        {array.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* background: var(--clr-grey-10); */
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      /* height: 225px; */
      height: 165px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 768px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`

export default FeaturedProduct
