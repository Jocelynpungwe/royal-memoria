import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  OurStory,
  CharityInfo,
  Mission,
  PageHero,
  CharityGallery,
} from '../components'
import { charity } from '../utils/constants'
function CharityPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <PageHero title="Charity" />
      <CharityInfo />
      <Mission array={charity} />
      <OurStory />
      <CharityGallery />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default CharityPage
