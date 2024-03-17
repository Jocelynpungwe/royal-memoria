import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDropdown, closeDropdown } from '../features/servicesSlice'

function ServiceNav() {
  const { isDropdownOpen } = useSelector((store) => store.services)
  const dispatch = useDispatch()

  const toggleDropdownNav = () => {
    dispatch(toggleDropdown())
  }

  const toggleCloseDropdown = () => {
    dispatch(closeDropdown())
  }

  return (
    <Wrapper className="nav-links">
      <button onClick={toggleDropdownNav}>Subsidiaries</button>

      {isDropdownOpen && (
        <ul
          onClick={toggleDropdownNav}
          className="dropdown-menu"
          onMouseLeave={toggleCloseDropdown}
        >
          <li>
            <Link to="entertainment">Film & Production</Link>
          </li>
          <li>
            <Link to="travel">Travel & Tours</Link>
          </li>
          <li>
            <Link to="property">Property & Innovation</Link>
          </li>
          <li>
            <Link to="food">M Kitoko Food</Link>
          </li>
          {/* <li>
            <Link to="cosmetic">Cosmetics</Link>
          </li> */}
        </ul>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  button {
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding-bottom: 0.5rem;
    cursor: pointer;
    margin: 0 0.5rem;
    &:hover {
      border-bottom: 2px solid var(--primary-gold);
    }
  }

  .nav-links {
    a {
      /* color: var(--clr-grey-3); */
      color: #fff;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);

      &:hover {
        border-bottom: 2px solid var(--primary-gold);
      }
    }
  }

  .side-link {
    a {
      /* color: var(--clr-grey-3); */
      color: black;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);

      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
      }
    }
  }

  .dropdown-menu {
    position: absolute;
    margin-top: 30px;
    top: 0;
    left: 0;
    width: 250px;
    height: 200px;
    background-color: rgba(49, 48, 48, 0.3);
    z-index: 9999;
    li {
      padding: 0.5rem 0;
    }
  }

  .sidedrop-down {
    position: absolute;
    margin-left: 30px;
    top: 0;
    left: 0;
    width: 250px;
    height: 200px;
    background-color: rgba(49, 48, 48, 0.3);
    z-index: 9999;
    li {
      margin: 1rem 0;
    }
  }
`
export default ServiceNav
