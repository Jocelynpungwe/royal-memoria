import React from 'react'
import styled from 'styled-components'

function Gratitude() {
  return (
    <Wrapper className="section-center">
      <h2>Gratitude to Our Valued Clients</h2>
      <p>
        At Royal Memoria, we extend our sincere appreciation to our esteemed
        clients for their unwavering trust and loyalty since 2013. We are deeply
        honored to have earned your confidence and to have had the opportunity
        to serve your business needs.
      </p>
      <p>
        We firmly believe that the enduring relationships we have built over the
        years are a testament to the positive impact our services have had on
        our clients' businesses. As we continue to grow and evolve, we are
        committed to upholding the highest standards of excellence and
        delivering results that exceed expectations.
      </p>
      <p>
        Thank you for choosing Royal Memoria as your trusted partner. We look
        forward to many more years of collaboration and success together."
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 0 5rem 0;
  h2 {
    color: var(--primary-gold);
    font-size: 1.5rem;
  }
`

export default Gratitude
