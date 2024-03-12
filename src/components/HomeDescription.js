import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import queenChess from '../images/property/queenchess.jpg'
function HomeDescription() {
  return (
    <Wrapper className="section-center">
      <div className="what-we-bring">
        <h2 className="title">What We Bring To The "Party"</h2>
        <p className="desc">
          A whole lot of how we do our work is influenced by what the client
          aims to accomplish and where we fit in with our client’s goal. Our
          services are thus scalable and diverse, this approach makes us
          comfortable in a business. This working method is at the cone of our
          company, and it highlights our belief in excellence and outstanding.
        </p>
      </div>
      <div className="mission">
        <h2>Mission</h2>
        <p>
          To provide the best services to our clients because we have a name to
          build and uphold, Our first question that we ask ourselves is what
          does the client need? This question leads to an in-depth understanding
          that makes our company excel at delivering a quality service that’s
          repeatable and impressive. This question leads us to querying and
          understanding what the client expects.
        </p>
        <h2>history</h2>
        <p>
          Created in 2016 in South Africa by Memoria Pungwe “Royal Memoria” is a
          multi-service company, with Three Subsidiary, it has also been
          operating successfully in Canada and the democratic republic of Congo
          since July 2021.
        </p>
      </div>
      <div className="hero-img">
        <Hero />
      </div>
      <img src={queenChess} alt="royal memeoria" />
      <div className="moto">
        <h2>Motto</h2>
        <p>
          Is to establish ourselves as one of the most credible companies so
          that we can attract and generate more business not only in the
          creative field but also in the technical and servicing fields.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;

  .what-we-bring {
    order: -2;
  }
  .hero-img {
    margin-bottom: 25px;
    order: -1;
  }

  img {
    width: 100%;
    height: 100%;
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
      background: black;
      color: white;
      padding: 25px;
    }

    img {
      grid-column: 0 1;
    }
    .moto {
      grid-column: 1 2;
      grid-row: 1 3;
      height: 100%;
      background: black;
      color: white;
      padding: 25px;
    }
    .hero-img {
      grid-column: 2 3;
      grid-row: span 2;
      margin-bottom: 0;
    }
  }
`

export default HomeDescription
