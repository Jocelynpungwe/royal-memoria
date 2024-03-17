import React, { useEffect } from 'react'
import styled from 'styled-components'
import { OurTeam, PageHero, Sponsors } from '../components'
import aboutImg from '../images/logo/logo2.png'

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
            Royal Memoria, founded in 2016 by Memoria Pungwe in South Africa,
            has emerged as a prominent parent company with a diversified
            portfolio comprising five subsidiaries: Royal Memoria Entertainment,
            Royal Travel Consulting, Royal Memoria Property, Royal Memoria
            Bites, and Royal Memoria Cosmetics. Since July 2021, the company has
            expanded its successful operations into Canada and the Democratic
            Republic of Congo.
          </p>
          <p>
            {' '}
            At its core, Royal Memoria upholds values of ethics, integrity, and
            empowerment, with a particular focus on fostering opportunities for
            the youth. The company is committed to delivering innovative and
            captivating experiences to its customers, spanning a wide spectrum
            of services. Whether engaging with Royal Memoria in South Africa,
            Canada, or the Democratic Republic of Congo, clients can anticipate
            nothing less than excellence and a dedication to making positive
            contributions to the communities they serve.
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
