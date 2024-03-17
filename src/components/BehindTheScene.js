import React from 'react'
import styled from 'styled-components'
import entvid from '../images/hero/entvid.mp4'
import VideoPortfolio from './VideoPortfolio'

function BehindTheScene() {
  return (
    <Wrapper>
      <div>
        <h2>Behind The Scenes</h2>
        <div className="grid">
          <video className="large-video" autoPlay muted loop id="myVideo">
            <source src={entvid} type="video/mp4" />
          </video>

          <div className="vid2">
            <video
              className="smaller-video"
              autoPlay
              muted
              loop
              style={{ marginBottom: '20px' }}
            >
              <source src={entvid} type="video/mp4" />
            </video>
            <video className="smaller-video" autoPlay muted loop id="myVideo">
              <source src={entvid} type="video/mp4" />
            </video>
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
    grid-column-gap: 30px;
  }

  .smaller-video {
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
`

export default BehindTheScene
