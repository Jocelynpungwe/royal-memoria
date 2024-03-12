import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home </Link> / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-blackish);
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;

  color: var(--actual-white);
  a {
    color: var(--primary-gold);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-gold);
  }
`

export default PageHero
