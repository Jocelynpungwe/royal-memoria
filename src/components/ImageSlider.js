import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'

function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <Wrapper>
      <section style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {images.map(({ url, alt, title, info }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              className="img-slider-img"
              aria-hidden={imageIndex !== index}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <ArrowBigRight aria-hidden />
        </button>
        <div
          style={{
            position: 'absolute',
            bottom: '.5rem',
            left: '50%',
            translate: '-50%',
            display: 'flex',
            gap: '.25rem',
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  .img-slider-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    transition: translate 300ms ease-in-out;
  }

  .img-slider-btn {
    all: unset;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 100ms ease-in-out;
  }

  .img-slider-btn:hover,
  .img-slider-btn:focus-visible {
    background-color: rgb(0, 0, 0, 0.2);
  }

  .img-slider-btn:hover > *,
  .img-slider-btn:focus-visible > * {
    animation: squish 200ms ease-in-out;
  }

  @keyframes squish {
    50% {
      scale: 1.4 0.6;
    }
  }

  .img-slider-btn > * {
    stroke: white;
    fill: black;
    width: 2rem;
    height: 2rem;
  }

  .img-slider-dot-btn {
    all: unset;
    display: block;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    transition: background-color 100ms ease-in-out;
  }

  .img-slider-dot-btn:hover,
  .img-slider-dot-btn:focus-visible {
    scale: 1.2;
  }

  .img-slider-dot-btn > * {
    stroke: white;
    fill: black;
    width: 100%;
    height: 100%;
  }

  .img-slider-dot-btn:focus-visible,
  .img-slider-btn:focus-visible {
    outline: auto;
  }

  .img-slider .slide .info {
    position: absolute;
    top: 0;
    padding: 15px 30px;
  }

  .img-slider .slide .info h2 {
    color: white;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .img-slider .slide .info p {
    color: white;
    background: rgba(0, 0, 0, 0.1);
    font-size: 16px;
    width: 60%;
    padding: 10px;
    border-radius: 4px;
  }
`

export default ImageSlider
