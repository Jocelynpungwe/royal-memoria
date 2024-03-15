import React from 'react'
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
