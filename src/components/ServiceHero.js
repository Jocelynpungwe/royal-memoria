import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ServiceHero({ video, image, title, description }) {
  return (
    <Wrapper>
      <div className="hero-entertaiment">
        {video && (
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
        )}
        {image && <img src={image} alt="hero section" />}

        <div className="content">
          <div className="section-center info">
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to="/contact" id="myBtn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Add some content at the bottom of the video/page */
  position: relative;
  h1 {
    font-size: 2rem;
    color: var(--primary-gold);
  }

  p {
    font-size: 1rem;
    max-width: 800px;
  }

  video,
  img {
    width: 100%;
  }

  #myVideo {
    min-width: 100%;
    min-height: 100%;
  }

  /* Add some content at the bottom of the video/page */
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  p {
    color: white;
  }

  /* Style the button used to pause/play the video */
  #myBtn {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background: var(--primary-gold);
    color: black;
    cursor: pointer;
  }

  #myBtn:hover {
    background: var(--secondy-gold);
    color: black;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
    #myBtn {
      width: 300px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    #myBtn {
      width: 400px;
    }
  }
`

export default ServiceHero
