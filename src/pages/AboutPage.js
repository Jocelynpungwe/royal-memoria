import React, { useEffect } from 'react'
import styled from 'styled-components'
import { OurTeam, PageHero, Sponsors } from '../components'
import aboutImg from '../images/logo/logo-no-background.png'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>About Royal Memoria</h2>
            <div className="underline"></div>
          </div>
          <p>
            Established in 2016 by Memoria Pungwe in South Africa, Royal Memoria
            has grown into a multi-service company with five subsidiaries. Since
            July 2021, we have expanded our successful operations into Canada
            and the Democratic Republic of Congo. Our foundation is built on
            principles of ethics, integrity, and empowerment, particularly of
            the youth. Continuously, we strive to deliver innovative and
            thrilling experiences to our customers across a diverse range of
            services. Whether you engage with us in South Africa, Canada, or the
            Democratic Republic of Congo, expect nothing short of excellence and
            a commitment to making a positive impact in the communities we
            serve.
          </p>
        </article>
      </Wrapper>
      <OurTeam />
      <Sponsors />
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  padding: 5rem 0;
  gap: 4rem;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
