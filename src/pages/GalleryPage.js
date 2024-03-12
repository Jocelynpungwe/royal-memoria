import React from 'react'
import styled from 'styled-components'
import { GalleryImage, PageHero } from '../components'

function GalleryPage() {
  return (
    <Wrapper>
      <PageHero title="Gallery" />
      <GalleryImage />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default GalleryPage
