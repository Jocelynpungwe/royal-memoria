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
      <button onClick={toggleDropdownNav}>Services</button>

      {isDropdownOpen && (
        <ul
          onClick={toggleDropdownNav}
          className="dropdown-menu"
          onMouseLeave={toggleCloseDropdown}
        >
          <li>
            <Link to="entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="travel">Travel and Consulting</Link>
          </li>
          <li>
            <Link to="property">Property and Innovation</Link>
          </li>
          <li>
            <Link to="food">M Kitoko</Link>
          </li>
          <li>
            <Link to="cosmetic">Cosmetics</Link>
          </li>
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
      margin: 1rem 0;
    }
  }
`
export default ServiceNav
