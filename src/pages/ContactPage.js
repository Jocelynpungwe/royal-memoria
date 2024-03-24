import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GeneralInfo, Gratitude, PageHero } from '../components'
function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <PageHero title="Contact" />
      <GeneralInfo />
      <Gratitude />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default ContactPage
