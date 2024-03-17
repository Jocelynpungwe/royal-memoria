import React from 'react'
import styled from 'styled-components'
import imgOne from '../images/charity/img1.jpeg'
import imgTwo from '../images/charity/img2.jpeg'
import vidOne from '../images/charity/vid1.mp4'
import vidTwo from '../images/charity/vid2.mp4'
import vidThree from '../images/charity/vid3.mp4'
import vidFour from '../images/charity/vid4.mp4'

function CharityGallery() {
  return (
    <Wrapper className="section-center">
      <h2>Our Gallery</h2>
      <div className="gallery">
        <img src={imgOne} alt="charity" />
        <img src={imgTwo} alt="charity" />
        <video src={vidOne} controls="controls" />
        <video src={vidTwo} controls="controls" />
        <video src={vidThree} controls="controls" />
        <video src={vidFour} controls="controls" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 5rem;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }
  video {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 1px solid var(--primary-gold);
  }
  h2 {
    color: var(--primary-gold);
    margin-bottom: 1.5rem;
  }

  @media (min-width: 800px) {
    .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }
  }
`
export default CharityGallery
