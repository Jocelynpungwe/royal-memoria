import React from 'react'
import styled from 'styled-components'

function EntertainmentInfo() {
  return (
    <Wrapper className="section-center">
      <h2>Video filming, editing, and production.</h2>
      <p>
        Serving the entire Ontario region, we specialize in providing
        exceptional video content for businesses and individuals. Our
        videography team can produce a wide range of video projects, including
        corporate videos, interviews, user generated content (UGC), product
        shots, specials, commercials, event coverage, and much more.
      </p>
      <p>
        We use the latest equipment and cutting-edge techniques to create
        stunning visuals that captivate your audience and tell your story in a
        compelling way. Whether you're looking to promote your brand, showcase
        your products, or capture a special event, we have the skills and
        expertise to bring your vision to life.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem 0;
  h2 {
    color: var(--primary-gold);
  }
`

export default EntertainmentInfo
