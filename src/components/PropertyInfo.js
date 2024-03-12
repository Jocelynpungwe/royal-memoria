import React from 'react'
import styled from 'styled-components'

import imageProperty from '../images/property/property1.jpg'
import imagePropertyTwo from '../images/property/property2.jpg'
import imagePropertyThree from '../images/property/property3.jpg'

function PropertyInfo() {
  return (
    <Wrapper>
      <div className="section-center container">
        <div>
          <h2>
            Discover Your Dream Home: A Seamless Blend of Luxury and Nature
          </h2>
          <p>
            Description: Explore our website to find the ideal property that
            seamlessly combines luxury living with the tranquility of nature.
            From panoramic views to meticulously designed interiors, each
            listing promises a unique and enchanting experience. Whether you're
            searching for a serene retreat or a stylish urban abode, our
            collection of properties is curated to fulfill your desires. Begin
            your journey towards finding your dream home with us and step into a
            world where comfort meets natural beauty.
          </p>
        </div>
        <img src={imageProperty} alt="bulding" />
        <div>
          <h2>Discover Your Dream Home</h2>
          <p>
            Description: Explore our website to find the ideal property that
            seamlessly combines luxury living with the tranquility of nature.
            From panoramic views to meticulously designed interiors, each
            listing promises a unique and enchanting experience.
          </p>
          <img src={imagePropertyTwo} alt="bulding" className="img-small" />
          <img src={imagePropertyThree} alt="bulding" className="img-small" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: black;
  padding: 30px;
  color: white;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .img-small {
    display: block;
    margin-top: 20px;
    height: 200px;
  }
  @media (min-width: 800px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 30px;
    }
  }
`
export default PropertyInfo
