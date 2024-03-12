import React from 'react'
import styled from 'styled-components'
import { CharityInfo, PageHero } from '../components'

function CharityPage() {
  return (
    <Wrapper>
      <PageHero title="Charity" />
      <CharityInfo />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default CharityPage
