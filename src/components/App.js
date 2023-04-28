import React from 'react'
import Header from './Header'
import Acceuil from './Acceuil'
import APropos from './APropos'
import styled, { createGlobalStyle } from 'styled-components'
import Services from './Services'
import Projets from './Projets'
import Contact from './Contact'

function App() {
  const HrDiv = styled.div`
    backgound-color: white;
    padding: 0.5px;
  `
  const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat";
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <div className="row mt-5">
        <Acceuil />
        <HrDiv />
        <APropos />
        <Services />
        <Projets />
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default App
