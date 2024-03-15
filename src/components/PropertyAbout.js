import React from 'react'
import styled from 'styled-components'
function PropertyAbout() {
  return (
    <Wrapper className="section-center">
      <section>
        <h2>What is the Deparment of Property and Innovation?</h2>
        <p>
          Royal Memoria Property is a subsidiary estate and property management
          that provides services in South Africa and beyond, including other
          African countries like the Democratic Republic of Congo. our company
          offers a range of services including home management, innovations,
          purchasing advice, and GFX digitized gallery services. Additionally,
          we manage various types of properties such as family homes, office
          buildings, and apartment complexes, often in collaboration with local
          agencies in the Democratic Republic of Congo. By early 2024, we aim to
          expand your offerings and increase your portfolio through contractual
          commitments.
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 5rem 0;
  h2 {
    color: var(--primary-gold);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .img-one {
    order: -2;
  }
`

export default PropertyAbout
