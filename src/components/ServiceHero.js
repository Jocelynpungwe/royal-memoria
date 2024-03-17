import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ServiceHero({ video, image, title, description, about }) {
  return (
    <Wrapper>
      <div className="hero-entertaiment">
        {video && (
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
        )}
        {image && <img src={image} alt="hero section" />}

        <div className="content">
          <div className="section-center info">
            <h1>{title}</h1>
            <p>{description}</p>
            {about ? (
              <Link to="/about" id="myBtn">
                About Us
              </Link>
            ) : (
              <Link to="/contact" id="myBtn">
                Contact Us
              </Link>
            )}
            {about && (
              <div className="social-media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="24"
                  viewBox="0 0 104 24"
                  fill="none"
                >
                  <a
                    href="https://www.facebook.com/share/ZVV6XjUqRroRGP6o/?mibextid=WC7FNe"
                    target="_blank"
                  >
                    <path
                      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                      fill="white"
                    />
                  </a>
                  {/* <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M92 0C88.741 0 88.333 0.014 87.053 0.072C82.695 0.272 80.273 2.69 80.073 7.052C80.014 8.333 80 8.741 80 12C80 15.259 80.014 15.668 80.072 16.948C80.272 21.306 82.69 23.728 87.052 23.928C88.333 23.986 88.741 24 92 24C95.259 24 95.668 23.986 96.948 23.928C101.302 23.728 103.73 21.31 103.927 16.948C103.986 15.668 104 15.259 104 12C104 8.741 103.986 8.333 103.928 7.053C103.732 2.699 101.311 0.273 96.949 0.073C95.668 0.014 95.259 0 92 0ZM92 2.163C95.204 2.163 95.584 2.175 96.85 2.233C100.102 2.381 101.621 3.924 101.769 7.152C101.827 8.417 101.838 8.797 101.838 12.001C101.838 15.206 101.826 15.585 101.769 16.85C101.62 20.075 100.105 21.621 96.85 21.769C95.584 21.827 95.206 21.839 92 21.839C88.796 21.839 88.416 21.827 87.151 21.769C83.891 21.62 82.38 20.07 82.232 16.849C82.174 15.584 82.162 15.205 82.162 12C82.162 8.796 82.175 8.417 82.232 7.151C82.381 3.924 83.896 2.38 87.151 2.232C88.417 2.175 88.796 2.163 92 2.163ZM85.838 12C85.838 8.597 88.597 5.838 92 5.838C95.403 5.838 98.162 8.597 98.162 12C98.162 15.404 95.403 18.163 92 18.163C88.597 18.163 85.838 15.403 85.838 12ZM92 16C89.791 16 88 14.21 88 12C88 9.791 89.791 8 92 8C94.209 8 96 9.791 96 12C96 14.21 94.209 16 92 16ZM96.965 5.595C96.965 4.8 97.61 4.155 98.406 4.155C99.201 4.155 99.845 4.8 99.845 5.595C99.845 6.39 99.201 7.035 98.406 7.035C97.61 7.035 96.965 6.39 96.965 5.595Z"
                    fill="white"
                  />
                  <path
                    d="M64 4.55705C63.117 4.94905 62.168 5.21305 61.172 5.33205C62.189 4.72305 62.97 3.75805 63.337 2.60805C62.386 3.17205 61.332 3.58205 60.21 3.80305C59.313 2.84605 58.032 2.24805 56.616 2.24805C53.437 2.24805 51.101 5.21405 51.819 8.29305C47.728 8.08805 44.1 6.12805 41.671 3.14905C40.381 5.36205 41.002 8.25705 43.194 9.72305C42.388 9.69705 41.628 9.47605 40.965 9.10705C40.911 11.388 42.546 13.522 44.914 13.997C44.221 14.185 43.462 14.229 42.69 14.081C43.316 16.037 45.134 17.46 47.29 17.5C45.22 19.123 42.612 19.848 40 19.54C42.179 20.937 44.768 21.752 47.548 21.752C56.69 21.752 61.855 14.031 61.543 7.10605C62.505 6.41105 63.34 5.54405 64 4.55705Z"
                    fill="white"
                  /> */}
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Add some content at the bottom of the video/page */
  position: relative;
  min-height: 50vh;
  h1 {
    font-size: 2rem;
    color: var(--primary-gold);
  }

  p {
    font-size: 1rem;
    max-width: 800px;
  }

  video,
  img {
    width: 100%;
    min-height: 50vh;
    object-fit: cover;
  }

  #myVideo {
    min-width: 100%;
    min-height: 50vh;
  }

  .social-media {
    margin-top: 32px;
  }

  /* Add some content at the bottom of the video/page */
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  p {
    color: white;
  }

  /* Style the button used to pause/play the video */
  #myBtn {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background: var(--primary-gold);
    color: black;
    cursor: pointer;
  }

  #myBtn:hover {
    background: var(--secondy-gold);
    color: black;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
    #myBtn {
      width: 300px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    #myBtn {
      width: 400px;
    }
  }
`

export default ServiceHero
