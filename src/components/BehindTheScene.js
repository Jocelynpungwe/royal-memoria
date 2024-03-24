import React from 'react'
import styled from 'styled-components'
import entvid from '../images/hero/entvid.mp4'
import VideoPortfolio from './VideoPortfolio'
import imgOne from '../images/behindsceneimage/img3.jpg'
import imgTwo from '../images/behindsceneimage/img8.jpg'
import imgThree from '../images/behindsceneimage/img15.jpg'

function BehindTheScene() {
  return (
    <Wrapper>
      <div>
        <h2>Behind The Scenes</h2>
        <div className="grid">
          {/* <video
            className="large-video"
            playsInline
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source src={entvid} type="video/mp4" />
          </video> */}
          <img src={imgThree} alt="behind the scene" className="large-video" />
          <div className="vid2">
            <img
              src={imgOne}
              alt="behind the scene"
              style={{ marginBottom: '24px' }}
            />
            <img src={imgTwo} alt="behind the scene" />
          </div>
        </div>
        <p>
          We have the potential to deliver affordable, quality content to
          audiences across the continent and around the world, through mixed
          broadcasts.
        </p>
      </div>
      <VideoPortfolio />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: black;
  padding: 80px;
  text-align: center;

  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }

  .smaller-video,
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .large-video {
    height: 427px;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    color: var(--primary-gold);
    margin-bottom: 20px;
  }
  p {
    margin-top: 25px;
    color: white;
  }

  @media (min-width: 800px) {
    .grid {
      grid-column-gap: 30px;
    }
  }
`

export default BehindTheScene
