import React from 'react'
import styled from 'styled-components'
import { Clapperboard, Film, Tv } from 'lucide-react'
function MovieHeader() {
  return (
    <Wrapper>
      <Clapperboard className="icons" />
      <div>
        <Film className="icons" />
        <Tv className="icons" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: gray;
  display: flex;
  justify-content: space-between;

  padding: 20px;
  margin: 0 auto;
  border-radius: 5px;

  .icons {
    font-size: 3rem;
    cursor: pointer;
  }
`

export default MovieHeader
