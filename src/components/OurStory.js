import React from 'react'
import styled from 'styled-components'
function OurStory() {
  return (
    <Wrapper className="section-center">
      <h2>Our Story</h2>
      <p>
        Memoria Pungwe's journey to founding Memoria Babys Foundation is indeed
        inspiring. Her compassionate nature and desire to help children have
        been evident since her own childhood. The pivotal moment came in 2015
        when she witnessed a dying child on the streets of Hillbrow,
        Johannesburg due to lack of food and shelter . Witnessing such a
        heartbreaking situation ignited Memoria's desire to make a difference
        and provide support to children facing similar struggles.{' '}
      </p>
      <p>
        {' '}
        This heartbreaking encounter spurred her into action and led to the
        establishment of Memoria Babys Foundation. Driven by her innate sense of
        empathy and a deep-rooted commitment to making a difference, Memoria
        wasted no time in initiating child sponsorship programs through the
        foundation. This step marked the beginning of a global movement
        dedicated to improving the lives of children in need.
      </p>
      <p>
        Memoria's vision and dedication have since transformed Memoria Babys
        Foundation into a beacon of hope for countless children worldwide. Her
        unwavering resolve to alleviate the suffering of vulnerable youngsters
        continues to inspire others to join her noble cause. As the foundation
        grows and reaches more communities, Memoria Pungwe's legacy of
        compassion and philanthropy shines brightly, leaving an indelible mark
        on the world and bringing rays of hope to those who need it most.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  h2 {
    color: var(--primary-gold);
  }
`

export default OurStory
