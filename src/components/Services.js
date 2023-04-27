import React from 'react'
import styled from 'styled-components'
import productDesign from '../assets/products.png'
import designEditorial from '../assets/design editirial.png'
import webDegin from '../assets/web design.png'

function Services() {
  const firstPartTitle = `Découvrez`
  const secondrstPartTitle = `mes services`
  const H2 = styled.h2`
    color: red;
  `
  const UnderLine = styled.div`
    background: rgb(47, 132, 218);
    background: linear-gradient(
      110deg,
      rgba(47, 132, 218, 1) 39%,
      rgba(0, 0, 0, 1) 100%
    );
  `
  const Div = styled.div`
    &:hover {
      cursor: pointer;
    }
  `

  const mess =
    "Au clic, un pop s'ouvrira pour vous donnez plus d'informations sur ce service."

  return (
    <React.Fragment>
      <section className="container" id="services">
        <div className="my-5">
          <div className="row justify-content-center">
            <H2 className="col-12 text-center">
              {firstPartTitle.toUpperCase()}
              <span className="text-dark">
                {' '}
                {secondrstPartTitle.toUpperCase()}
              </span>
            </H2>
            <UnderLine className="col-4 col-md-3 col-lg-2 p-1"></UnderLine>
          </div>

          <div className="row justify-content-center mt-5 mb-4 mb-md-2">
            <div className="col-12 col-md-6 row">
              <Div
                onClick={() => alert(mess)}
                className="border rounded-4 p-2 text-center col-12 col-md-4 mb-4 mb-md-0"
              >
                <i className="bi bi-vector-pen fs-2"></i>
                <h5 style={{ color: 'blue' }}>Design Graphic</h5>
              </Div>

              <Div
                onClick={() => alert(mess)}
                className="border rounded-4 p-2 text-center col-12 col-md-7 offset-0 offset-md-1"
              >
                <img
                  className="mb-2"
                  src={designEditorial}
                  alt="design éditorial"
                />
                <h5 style={{ color: 'red' }}>Design Editorial</h5>
              </Div>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-12 col-md-6 row">
              <Div
                onClick={() => alert(mess)}
                className="border rounded-4 p-2 text-center col-12 col-md-4 mb-4 mb-md-0"
              >
                <img
                  className="mb-2"
                  src={productDesign}
                  alt="design éditorial"
                />
                <h5 style={{ color: 'red' }}>Product Design</h5>
              </Div>

              <Div
                onClick={() => alert(mess)}
                className="border rounded-4 p-2 text-center col-12 col-md-7 offset-0 offset-md-1"
              >
                <img className="mb-2" src={webDegin} alt="design éditorial" />
                <h5 style={{ color: 'blue' }}>Web Design</h5>
              </Div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Services
