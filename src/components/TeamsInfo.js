import React from 'react'
import styled from 'styled-components'

function TeamsInfo({ theTeam, teamLocation }) {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Team {teamLocation} </h3>
        <div className="services-center">
          {theTeam.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className="service" key={id}>
                <span className="icon">
                  <img src={icon} alt={`staff memeber name: ${title}`} />
                </span>
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
  text-align: center;
  margin-top: 50px;
  h3,
  h4 {
    /* color: var(--clr-primary-1); */
    color: black;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

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
    background: var(--primary-gray);

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

export default TeamsInfo
