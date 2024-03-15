import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import queenChess from '../images/chess.png'
function HomeDescription() {
  return (
    <Wrapper className="section-center">
      <div className="what-we-bring">
        <h2 className="title">Who Are We</h2>
        <p className="desc">
          Royal memoria is a multi-service company with five subsidiaries in
          Canada ,South africa, and Dr Congo .We specializes in media buying,
          movie and production, food and production, property and innovation,
          travel and tourism, and cosmetics products.
        </p>
      </div>
      <div className="mission">
        <h3>What Makes Us Special</h3>
        <p>
          With five subsidiaries spanning across Canada, South Africa, and Dr
          Congo, Royal Memoria offers a diverse range of services, catering to
          various markets and industries. This diversity allows us to leverage
          unique insights and expertise from different regions, providing
          clients with tailored solutions to meet their specific needs.
        </p>
        <p>
          Each subsidiary within Royal Memoria is staffed with industry experts
          who possess in-depth knowledge and experience in their respective
          fields. This expertise ensures that our clients receive top-notch
          service and solutions that are backed by industry best practices and
          insights.
        </p>
      </div>
      <div className="hero-img">
        <Hero />
      </div>
      <img src={queenChess} alt="royal memeoria" />
      <div className="moto">
        <h3>What We Bring</h3>
        <p>
          at Royal Memoria, we bring a unique blend of creativity, strategy,
          collaboration, innovation, excellence, customer-centricity, and
          adaptability to every project, ensuring that our clients receive
          exceptional value and results that drive their success.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  h3,
  h4 {
    color: var(--primary-gold);
  }

  p {
    color: white;
    opacity: 0.75;
  }

  .desc {
    text-align: center;
    color: black;
    max-width: 700px;
    margin: 0 auto;
  }

  .what-we-bring {
    order: -2;
    margin-bottom: 20px;
  }

  .hero-img {
    margin-bottom: 25px;
    order: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mission,
  .moto {
    background: black;
    padding: 25px;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 25px;

    .what-we-bring {
      grid-column: span 3;
      grid-row: 0 1;
      text-align: center;
    }

    .mission {
      grid-column: span 2;
      grid-row: 1 2;
      color: white;
    }

    img {
      grid-column: 0 1;
    }
    .moto {
      grid-column: 1 2;
      grid-row: 1 3;
      height: 100%;
      color: white;
    }

    .hero-img {
      grid-column: 2 3;
      grid-row: span 2;
      margin-bottom: 0;
    }
  }
`

export default HomeDescription
