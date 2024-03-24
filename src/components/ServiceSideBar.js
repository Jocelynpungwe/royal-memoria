import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/actionSlice'
import { toggleDropdown, closeDropdown } from '../features/servicesSlice'
import styled from 'styled-components'

function ServiceSideBar() {
  const { isDropdownOpen } = useSelector((store) => store.services)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  const toggleDropdownNav = () => {
    dispatch(toggleDropdown())
  }

  const toggleCloseDropdown = () => {
    dispatch(closeDropdown())
  }

  return (
    <Wrapper className="side-link">
      <button onClick={toggleDropdownNav}>Subsidiaries</button>

      {isDropdownOpen && (
        <ul
          onClick={toggleDropdownNav}
          className="sidedrop-down"
          onMouseLeave={toggleCloseDropdown}
        >
          <li onClick={toggle}>
            <Link to="entertainment">Film & Production</Link>
          </li>
          <li onClick={toggle}>
            <Link to="travel">Travel & Tours</Link>
          </li>
          <li onClick={toggle}>
            <Link to="property">Property & Innovation</Link>
          </li>
          <li onClick={toggle}>
            <Link to="food">M Kitoko Food</Link>
          </li>
          {/* <li onClick={toggle}>
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
  align-items: start;
  position: relative;
  button {
    border: none;
    background: transparent;
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    transition: var(--transition);
    text-align: left;
    letter-spacing: var(--spacing);
    padding: 1rem 1.5rem;
    cursor: pointer;
    width: 100%;

    &:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  }

  .side-link {
    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);

      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-3);
      }
    }
  }

  .sidedrop-down {
    position: absolute;
    margin-left: 150px;
    top: 0;
    left: 0;
    width: 250px;
    height: 320px;
    background-color: rgba(49, 48, 48, 0.3);

    color: var(--clr-grey-3);
    z-index: 9999;
    li {
      margin: 0.3rem 0;
    }
    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);

      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-3);
      }
    }
  }
`

export default ServiceSideBar
