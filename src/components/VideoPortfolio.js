import React from 'react'

import MovieTrending from './MovieTrending'
import { movieGallery, movierecomnd } from '../utils/constants'
import styled from 'styled-components'
import GalleryImage from './GalleryImage'

function VideoPortfolio() {
  return (
    <Wrapper>
      <div>
        <h2>Video Portfolio</h2>
        <div className="recomand-info">
          {movierecomnd.map((movie) => {
            return <MovieTrending movie={movie} />
          })}
        </div>
      </div>
      <h2>Gallery</h2>
      <div>
        <GalleryImage array={movieGallery} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid white;

  h2 {
    margin: 30px 0;
  }
  .recomand-info {
    width: 100%;
  }

  @media (min-width: 800px) {
    .recomand-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 25px;
    }
  }
`

export default VideoPortfolio
