import React from 'react'
import styled from 'styled-components'
import { goals } from '../utils/constants'

function Mission() {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>What we bring to the "party"</h3>
          <p>
            A whole lot of how we do our work is influenced by what the client
            aims to accomplish and where we fit in with our client’s goal. Our
            services are thus scalable and diverse, this approach makes us
            comfortable in a business. This working method is at the cone of our
            company, and it highlights our belief in excellence and outstanding.
          </p>
        </article>
        <div className="services-center">
          {goals.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 100px;
  text-align: center;
  h3,
  h4 {
    /* color: var(--clr-primary-1); */
    color: black;
  }
  padding: 5rem 0;

  /* background: black; */

  .header h3 {
    font-size: 1.5;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    /* color: var(--clr-primary-3); */
    color: black;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    /* background: var(--clr-primary-7); */

    text-align: center;
    padding: 1rem;
    border-radius: var(--radius);
    p {
      /* color: var(--clr-primary-2); */
      color: black;
      opacity: 0.75;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 1020px) {
    /* .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    } */
  }
  @media (min-width: 1020px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`

export default Mission
