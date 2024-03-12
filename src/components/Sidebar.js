import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo/logo-no-background.png'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/actionSlice'

function Sidebar() {
  const { isSideBarOpen } = useSelector((store) => store.actions)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <SideBarWrapper>
      <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <Link to="/">
            <img src={logo} alt="logo of royal memoria" />
          </Link>
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <select>
              <option>
                <Link to="entertainment">Entertainment</Link>
              </option>
              <option>
                <Link to="travel">Travel and Counsulting</Link>
              </option>
              <option>
                <Link to="proparty">Proparty and Innovation</Link>
              </option>
              <option>
                <Link to="kitoko">M Kitoko Food</Link>
              </option>
              <option>
                <Link to="cosmetics">Cosmetics</Link>
              </option>
            </select>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="gallery">Gallery</Link>
          </li>
          <li>
            <Link to="charity">Charity</Link>
          </li>
        </ul>
      </aside>
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.div`
  text-align: center;
  img {
    width: 5rem;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: red;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: pink;
  }
  .logo {
    justify-self: center;
    height: 2.8125rem;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
