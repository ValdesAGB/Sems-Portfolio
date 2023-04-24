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
      <header className="py-2 fixed-top bg-white ">
        <div className="container">
          <div className="row align-items-center ">
            <a href="#accueil" className="col text-decoration-none">
              <Brand>
                Clar
                <span style={{ fontFamily: fontFamilly.brand, color: 'red' }}>
                  i
                </span>
                ta
              </Brand>
            </a>
            <div className="row col-8 px-5 fw-bold text-center">
              {headerElements.map(({ id, title }) => (
                <Menu
                  href={`#${id}`}
                  key={id}
                  className={`col `}
                  style={{ color: `${id === 'accueil' ? 'red' : 'black'}` }}
                >
                  {title}
                </Menu>
              ))}
            </div>
            <a href="#contact" className="text-decoration-none col text-end">
              {allButton.contact}
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
