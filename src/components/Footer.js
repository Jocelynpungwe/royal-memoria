import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { closeDropdown } from '../features/servicesSlice'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../images/logo/logo-no-background.png'
import ServiceNav from './ServiceNav'

function Footer() {
  const dispatch = useDispatch()
  const toggleCloseDropdown = () => {
    dispatch(closeDropdown())
  }
  return (
    <Wrapper>
      <footer className="section-center">
        <div className="project-container">
          <div className="logo-footer-container">
            <img src={logo} alt="logo" />
            <div className="link">
              <h3>Menu</h3>
              <ul className="nav-links">
                <li onClick={toggleCloseDropdown}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="about">About</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="contact">Contact</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="charity">Charity</Link>
                </li>
              </ul>
            </div>

            <div className="link">
              <h3>Subsidiary</h3>
              <ul className="nav-links">
                <li onClick={toggleCloseDropdown}>
                  <Link to="entertainment">Film & Production</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="travel">Travel & Tours</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="property">Property & Innovation</Link>
                </li>
                <li onClick={toggleCloseDropdown}>
                  <Link to="food">M Kitoko Food</Link>
                </li>
                {/* <li onClick={toggleCloseDropdown}>
                  <Link to="cosmetic">Cosmetics</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <p className="footer-paragraph">
            Royal Memoria is a global parent company with five subsidiaries
            spanning across three countries. Our operations are available based
            on the respective country's time zone for your convenience.
          </p>
          <div className="copyright-container">
            <p className="copyright">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
            <div>
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
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  color: white;
  min-height: 90vh;
  flex-shrink: 0;
  padding: 5rem 0;

  img {
    width: 11rem;

    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: white;
  }

  .footer-link {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: var(--white);
  }

  .footer-paragraph,
  .copyright {
    font-size: 15px;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }

  .footer-paragraph {
    margin: 25px 0;
    font-weight: 500;
  }

  .copyright {
    font-weight: 700;
    margin-bottom: 25px;
  }

  .link {
    margin-top: 30px;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    /* li {
      margin: 0 0.5rem;
    } */
    a {
      /* color: var(--clr-grey-3); */
      color: #fff;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      /* padding: 0.5rem; */
      &:hover {
        border-bottom: 2px solid var(--primary-gold);
      }
    }
  }

  @media (min-width: 800px) {
    min-height: 60vh;

    .logo-footer-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .nav-links {
      margin-top: 0;
    }

    .footer-paragraph {
      text-align: left;
      max-width: 450px;
    }

    .copyright-container {
      display: flex;
      justify-content: space-between;
    }
    .link {
      margin-top: 0;
    }
  }
`

export default Footer
