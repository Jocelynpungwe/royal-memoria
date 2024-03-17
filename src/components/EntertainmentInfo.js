import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo/logo-no-background.png'
function EntertainmentInfo() {
  return (
    <Wrapper className="section-center">
      <section>
        <h2>Film & Production</h2>
        <p>
          Royal Memoria, established in 2016, has been instrumental in nurturing
          development across various sectors, with a particular focus on the
          film and media industry. Our ethos centers around assuming a central
          role in this vibrant industry, delivering bespoke educational,
          inspirational, and institutional content experiences tailored to the
          multifaceted needs of life.
        </p>
        <p>
          Our forte lies in the development and production of ambitious,
          cinematic films guided by visionary auteurs. We are dedicated to
          crafting captivating, visually stunning, and emotionally impactful
          films that resonate globally. Moreover, we are steadfast in our
          commitment to identifying and bolstering emerging talents, ensuring a
          steady stream of fresh voices and perspectives.
        </p>
        <div>
          <p>
            Royal Entertainment also excels in talent placement across the
            multimedia industry, offering services such as:
          </p>
          <ul>
            <li>
              TV production (Acting, singing, dancing, documentary, presenting
              and Music video).{' '}
            </li>
            <li>Photographic, designing, drawing, painting</li>
            <li>Advertising campaign </li>
            <li>Promotion </li>
            <li>Voice over </li>
            <li>Theatre</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>
          Branding ,Marketing, Advertising, public relations, recruiting
          ,staffing
        </h2>
        <p>
          Royal Memoria offers a comprehensive suite of services across various
          facets of branding, marketing, advertising, public relations, and
          staffing solutions. Our focus on recruiting talented individuals for
          roles in marketing, public relations, advertising, graphic design, and
          web production demonstrates a commitment to providing clients with the
          right personnel for their needs, whether on a full-time or contract
          basis. Our range of marketing services is impressive, covering
          everything from competitive analysis to strategy development and from
          new product introductions to packaging design.
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 5rem 0;
  h2 {
    font-size: 1.5rem;
    color: var(--primary-gold);
    margin-top: 32px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .img-one {
    order: -2;
  }
  ul {
    list-style-type: circle;
    margin-left: 45px;
  }
`

export default EntertainmentInfo
