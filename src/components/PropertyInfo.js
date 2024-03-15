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
            Are you looking to buy property in democratic republic of Congo and
            South Africa? Look no further! With a dedication to excellence and
            professionalism, we guarantee the highest quality service to all our
            clients. Navigating the process of preparing, pricing, and marketing
            your property can be overwhelming, but we are here to help every
            step of the way.
          </p>
        </div>
        <img src={imageProperty} alt="bulding" />
        <div>
          <h2>Are You Ready To Sell?</h2>
          <p>
            Do you want to sell your house ? and you don't know how to start?
            don’t worry. we will help you prepare, price and market to secure
            the best price and the quickest closing time we can. We Utilize
            various marketing channels to reach potential buyers, such as online
            listings and social media.
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
  padding: 5rem 0;

  h2 {
    color: var(--primary-gold);
    margin-top: 1rem;
  }
  p {
    color: white;
    opacity: 0.75;
  }

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
  h2 {
    margin-top: 0;
  }
`
export default PropertyInfo
