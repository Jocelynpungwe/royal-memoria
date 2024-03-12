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
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>About Royal Memoria</h2>
            <div className="underline"></div>
          </div>
          <p>
            Created in 2016 in South Africa by Memoria Pungwe “Royal Memoria” is
            a multi-service company, with Three Subsidiary, it has also been
            operating successfully in Canada and the democratic republic of
            Congo since July 2021, built on principles of ethics, good integrity
            and empowering and influencing those around us especially the youth.
            We continue to deliver innovative and exciting experiences to our
            customers through our range of services.
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
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);

    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 1rem auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
