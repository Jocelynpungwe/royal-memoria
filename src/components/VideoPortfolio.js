import React from 'react'

import MovieTrending from './MovieTrending'
import { movietrend, movierecomnd } from '../utils/constants'
import styled from 'styled-components'

function VideoPortfolio() {
  return (
    <Wrapper>
      <div>
        <h2>New Release</h2>
        <div className="trending-info">
          {movietrend.map((movie) => {
            return <MovieTrending movie={movie} trending={true} />
          })}
        </div>
        <h2>Video Portfolio</h2>
        <div className="recomand-info">
          {movierecomnd.map((movie) => {
            return <MovieTrending movie={movie} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid white;

  h2 {
    margin: 30px 0;
  }
  .trending-info {
    display: flex;
    overflow-x: auto;
  }
  .recomand-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
`

export default VideoPortfolio
