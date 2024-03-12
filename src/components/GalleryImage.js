import React from 'react'
import styled from 'styled-components'
import imgSource from '../images/hero/1.png'
import imgSourceOne from '../images/hero/2.png'
import imgSourceTwo from '../images/hero/3.png'
function GalleryImage() {
  return (
    <Wrapper className="section-center">
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
      <div>
        <img src={imgSource} alt="one" />
      </div>
      <div>
        <img src={imgSourceOne} alt="one" />
      </div>
      <div>
        <img src={imgSourceTwo} alt="one" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;

  div {
    width: 200px;
    height: 200px;
    padding: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export default GalleryImage
