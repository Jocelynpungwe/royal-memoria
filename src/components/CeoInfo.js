import React from 'react'

import styled from 'styled-components'
import { ceo } from '../utils/constants'

function CeoInfo() {
  return (
    <Wrapper id="staff">
      <div className="section-center">
        <article className="header">
          <h3>Our Team</h3>
        </article>
        <div className="services-center">
          {ceo.map((service) => {
            const { id, icon, title, text, descriptionOne, descriptionTwo } =
              service
            return (
              <article className="service" key={id}>
                <span className="icon">
                  <img src={icon} alt={icon} />
                </span>
                <h4>{title}</h4>
                <p className="subtitle">{text}</p>
                <p>{descriptionOne}</p>
                <p>{descriptionTwo}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--primary-gold);
  }

  .subtitle {
    color: black;
    font-weight: 700;
  }

  padding: 3rem 0;

  background: black;
  text-align: center;
  .icon {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .header h3 {
    margin-bottom: 2rem;
    color: var(--primary-gold);
  }
  p {
    line-height: 1.8;
    color: white;
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    /* background: var(--clr-primary-7); */
    background: var(--clr-grey-1);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    width: 90%;
    max-width: 750px;
    margin: 0 auto;
    p {
      /* color: var(--clr-primary-2); */
      color: white;
    }
  }
  span {
    width: 10rem;
    height: 10rem;
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

  /* @media (min-width: 1020px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1020px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  } */
`

export default CeoInfo
