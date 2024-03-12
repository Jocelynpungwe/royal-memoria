import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo/logo-no-background.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/actionSlice'
import { closeDropdown } from '../features/servicesSlice'
import ServiceNav from './ServiceNav'

function Navbar() {
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  const toggleCloseDropdown = () => {
    dispatch(closeDropdown())
  }

  return (
    <header className="background-header">
      <NavWrapper>
        <nav className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo of royal memoria" />
            </Link>
            <button type="button" className="nav-toggle" onClick={toggle}>
              <FaBars />
            </button>
          </div>
          <div>
            <ul className="nav-links">
              <li onClick={toggleCloseDropdown}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={toggleCloseDropdown}>
                <Link to="about">About</Link>
              </li>
              <ServiceNav />
              <li onClick={toggleCloseDropdown}>
                <Link to="contact">Contact</Link>
              </li>
              <li onClick={toggleCloseDropdown}>
                <Link to="gallery">Gallery</Link>
              </li>
              <li onClick={toggleCloseDropdown}>
                <Link to="charity">Charity</Link>
              </li>
            </ul>
          </div>
        </nav>
      </NavWrapper>
    </header>
  )
}

const NavWrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 4rem;
  }
  .nav-center {
    width: 75vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    /* color: var(--clr-primary-5); */
    color: white;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 1020px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 100px;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        /* color: var(--clr-grey-3); */
        color: #fff;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-gold);
        }
      }
    }
  }
`

export default Navbar
