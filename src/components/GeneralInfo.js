import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaFacebook } from 'react-icons/fa'

function GeneralInfo() {
  return (
    <Wrapper>
      <div className="section-center services-center">
        <article className="service">
          <span className="icon">{<FaEnvelope />}</span>
          <h4>Main Branch: South Africa</h4>
          <p className="disc-header">
            203 Phumula flats, 19 Robyn street, Gersimton,1401, Johannesburg
          </p>
          <p className="email">timepromorsa@gmail.com</p>
          <a href="https://www.facebook.com/share/ZVV6XjUqRroRGP6o/?mibextid=WC7FNe">
            <FaFacebook className="facebook" />
          </a>
        </article>
        <article className="service">
          <span className="icon">{<FaEnvelope />}</span>
          <h4>Branch Canada</h4>
          <p className="disc-header">Ottawa, Ontario</p>
          <p className="email">pmemoria@royalmemoriaentertainment.com</p>
          <a href="https://www.facebook.com/share/ZVV6XjUqRroRGP6o/?mibextid=WC7FNe">
            <FaFacebook className="facebook" />
          </a>
        </article>
        <article className="service">
          <span className="icon">{<FaEnvelope />}</span>
          <h4>Branch Dr Congo</h4>
          <p className="disc-header">Gombe, Kinshasa</p>
          <p className="email">admroyalconsolting@gmail.com</p>
          <a href="https://www.facebook.com/share/ZVV6XjUqRroRGP6o/?mibextid=WC7FNe">
            <FaFacebook className="facebook" />
          </a>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .ig-image {
    height: 30px;
    width: 30px;
  }

  h3,
  h4 {
    /* color: var(--clr-primary-1); */
    color: white;
  }
  padding: 5rem 0;
  .facebook {
    color: white;
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
  }

  .disc-header {
    color: white;
  }

  .video-div {
    border: #57411c 1px solid;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    /* color: var(--clr-primary-3); */
    color: white;
    opacity: 0.75;
  }
  .media-div {
    display: flex;
    justify-content: space-between;
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    /* background: var(--clr-primary-7); */
    background: black;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      /* color: var(--clr-primary-2); */
      color: white;
      opacity: 0.75;
    }
    .email {
      color: var(--primary-gold);
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
    background: var(--primary-gold);
    color: black;
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 1020px) {
    .header {
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1020px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  /* @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  } */
`

export default GeneralInfo
