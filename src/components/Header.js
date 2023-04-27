import React from 'react'
import { headerElements } from '../data'
import styled from 'styled-components'
import { allButton, fontFamilly } from '../untils'

function Header() {
  const Brand = styled.h3`
    font-family: ${fontFamilly.brand};
    color: #2882de;
    &:hover {
      cursor: pointer;
    }
  `

  const Menu = styled.a`
    color: black;
    text-decoration: none;
  `

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top bg-white">
        <div className="container-fluid">
          <a href="#accueil" className="navbar-brand col text-decoration-none ">
            <Brand>
              Clar
              <span style={{ fontFamily: fontFamilly.brand, color: 'red' }}>
                i
              </span>
              ta
            </Brand>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="bi bi-list "
              style={{ color: 'red', fontSize: '1.5em' }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse row justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav row col-10 col-md-9 px-5 px-md-0 mx-md-2 align-items-center fw-bold  text-center">
              {headerElements.map(({ id, title }) => (
                <Menu
                  key={id}
                  href={`#${id}`}
                  className={`nav-item my-4 m-0 m-md-1 m-lg-4 col `}
                  style={{
                    color: `${id === 'accueil' ? 'red' : 'black'}`,
                  }}
                >
                  {title}
                </Menu>
              ))}
            </div>

            <a
              href="#contact"
              className="text-decoration-none col row justify-content-center"
            >
              {allButton.contact}
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
