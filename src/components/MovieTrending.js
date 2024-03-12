import React from 'react'
import styled from 'styled-components'
import entvid from '../images/hero/entvid.mp4'
import { Film, Dot, Tv } from 'lucide-react'

function MovieTrending({ movie, trending }) {
  return (
    <Wrapper>
      <div className="movie-trend">
        <div
          className={
            trending === true
              ? 'movie-background trend-size'
              : 'movie-background'
          }
        >
          <video id="myVideo">
            <source src={movie.vid} type="video/mp4" />
          </video>
          <div className="movie-info">
            <p>{movie.year}</p>
            <Dot style={{ color: 'white' }} />
            {movie.genre === 'Movie' ? (
              <Film style={{ color: 'white' }} />
            ) : (
              <Tv style={{ color: 'white' }} />
            )}
            <p style={{ marginLeft: '0.5rem' }}>{movie.genre}</p>
            <Dot style={{ color: 'white' }} />
            <p>{movie.rated}</p>
          </div>
          <p>{movie.title}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .movie-background {
    object-fit: cover;
  }
  .trend-size {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }

  video {
    border-radius: 10px;
    width: 100%;
  }

  .movie-info {
    display: flex;
  }
`

export default MovieTrending
