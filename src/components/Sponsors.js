import React from 'react'
import styled from 'styled-components'
import imgOne from '../images/partners/sponsor1.jpg'
import imgTwo from '../images/partners/sponsor2.png'
import imgThree from '../images/partners/sponsor3.png'
import imgFour from '../images/partners/sponsor4.png'
import imgFive from '../images/partners/sponsor5.png'
import imgSix from '../images/partners/sponsor6.png'

function Sponsors() {
  return (
    <Wrapper>
      <div className="section-center">
        <h2>Trusted by our partners</h2>
        <div className="logos">
          <div className="logos-slide">
            <img src={imgOne} alt="first image" />
            <img src={imgTwo} alt="first image" />
            <img src={imgThree} alt="first image" />
            <img src={imgFour} alt="first image" />
            <img src={imgFive} alt="first image" />
            <img src={imgSix} alt="first image" />
          </div>
          <div className="logos-slide">
            <img src={imgOne} alt="first image" />
            <img src={imgTwo} alt="first image" />
            <img src={imgThree} alt="first image" />
            <img src={imgFour} alt="first image" />
            <img src={imgFive} alt="first image" />
            <img src={imgSix} alt="first image" />
          </div>
          <div className="logos-slide">
            <img src={imgOne} alt="first image" />
            <img src={imgTwo} alt="first image" />
            <img src={imgThree} alt="first image" />
            <img src={imgFour} alt="first image" />
            <img src={imgFive} alt="first image" />
            <img src={imgSix} alt="first image" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* height: 30vh; */
  padding: 2rem;
  text-align: center;
  background: var(--primary-gray);

  h2 {
    font-size: 1rem;
  }

  img {
    height: 150px;
    margin: 0 50px;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    overflow: hidden;
    padding: 10px 0;
    background: white;
    white-space: nowrap;
    position: relative;
    background: var(--primary-gray);
  }

  .logos::before,
  .logos::after {
    position: absolute;
    top: 0;
    content: '';
    width: 250px;
    height: 100%;
    z-index: 2;
  }

  .logos::before {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      var(--primary-gray)
    );
  }

  .logos::after {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      var(--primary-gray)
    );
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-block;
    animation: 35s slide infinite linear;
  }
`

export default Sponsors
