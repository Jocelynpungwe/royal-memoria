import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo/logo-no-background.png'
function EntertainmentInfo() {
  return (
    <Wrapper className="section-center">
      <section>
        <h2>Film and Production/ Royal Memoria Entertainment .</h2>
        <p>
          Since our establishment in 2016, Royal Memoria has been dedicated to
          fostering development across various sectors, particularly in the film
          and media industry. Our culture revolves around playing a pivotal role
          in this industry, providing personalized educational, motivational,
          and institutional content experiences tailored to the diverse needs of
          life's various facets.
        </p>
        <p>
          We specialize in developing and producing ambitious, cinematic films
          driven by visionary auteurs. Our goal is to create compelling,
          visually striking, and emotionally resonant films that resonate on an
          international level. Additionally, we are committed to discovering and
          supporting new talents, ensuring a continuous influx of fresh voices
          and perspectives.
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

      <img src={logo} alt="logo" className="img-one" />

      <section>
        <img src={logo} alt="logo" />
      </section>
      <section>
        <h2>
          Branding ,Marketing, Advertising, public relations, recruiting
          ,staffing
        </h2>
        <p>
          At Royal Memoria, we excel in branding, marketing, advertising, public
          relations, and staffing solutions. With a dedicated focus on
          recruiting talented individuals for roles in marketing, public
          relations, advertising, graphic design, and web production, we offer
          comprehensive staffing services for both full-time and contract
          positions. Our expertise extends to agencies, corporations,
          nonprofits, and other businesses.
        </p>
        <p>
          In addition to recruitment, we offer a wide range of marketing
          services including competitive analysis, quantitative and qualitative
          research, strategy development, new product introductions, packaging
          design, naming, logo design, exhibit display design, and messaging
          matrices.
        </p>
        <p>
          Our capabilities also extend to producing advertising media for
          various products and designing clothing brands. Specializing in
          television reality production, awareness films, documentary films,
          music videos, logo animation, logo design, publishing, charity events,
          and product launches, we ensure impactful storytelling across diverse
          platforms.
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  padding: 5rem 0;
  h2 {
    color: var(--primary-gold);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .img-one {
    order: -2;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    .img-one {
      order: 0;
    }
  }
`

export default EntertainmentInfo
