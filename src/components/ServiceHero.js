import React from 'react'

import styled from 'styled-components'

function ServiceHero({ video, image, title }) {
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
          <div className="info">
            <h1>{title}</h1>
            <p>Lorem ipsum...</p>

            <button id="myBtn">Pause</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Add some content at the bottom of the video/page */
  position: relative;
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
    color: #f1f1f1;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .info {
  }

  /* Style the button used to pause/play the video */
  #myBtn {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }

  #myBtn:hover {
    background: #ddd;
    color: black;
  }
`

export default ServiceHero
