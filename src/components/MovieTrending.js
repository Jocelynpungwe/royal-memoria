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
          <video src={movie.vid} controls="controls" />

          <div className="container-movie">
            <div className="movie-info">
              <p>{movie.year}</p>
              <Dot className="icons" />
              {movie.genre === 'Movie' ? (
                <Film className="icons" />
              ) : (
                <Tv className="icons" />
              )}
              <p style={{ marginLeft: '0.5rem' }}>{movie.genre}</p>
              <Dot className="icons" />
              <p>{movie.rated}</p>
            </div>
            <p className="movie-title">{movie.title}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid var(--primary-gold);
  margin-bottom: 1rem;
  border-radius: 10px;

  .container-movie {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 1rem;
    width: 100%;
  }

  .movie-background {
    object-fit: cover;
    .movie-title {
      margin-top: 0;
      margin-bottom: 2rem;
      color: var(--secondy-gold);
    }
  }
  .trend-size {
    /* width: 300px; */
    /* height: 300px; */
    margin-right: 20px;
  }

  video {
    border-radius: 10px;
    width: 100%;
  }

  .movie-info {
    display: flex;
    color: white;
    .icons {
      margin-top: 25px;
    }
  }
`

export default MovieTrending
