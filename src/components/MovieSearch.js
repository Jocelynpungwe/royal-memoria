import React from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import styled from 'styled-components'

function MovieSearch() {
  return (
    <Wrapper>
      <div>
        <GiMagnifyingGlass />
        <input type="text" className="searct-input" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default MovieSearch
