import React from 'react'
import styled from 'styled-components'

function GalleryImage({ array }) {
  return (
    <Wrapper>
      {array.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.urlImg} alt={image.altImg} />
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;

  div {
    width: 100%;
    height: 200px;
    padding: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 35px;
  }
  @media (min-width: 800px) {
    div {
      width: 300px;
    }
  }
`
export default GalleryImage
