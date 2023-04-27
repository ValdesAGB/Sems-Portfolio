import React, { useEffect, useState } from 'react'
import projet1 from '../assets/projet1.png'
import styled, { keyframes } from 'styled-components'

function Projets() {
  const mess = "Un pop s'ouvrira pour détailler ce projet"

  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('listProjets')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        setAlert(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-50px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`

  const fadeInRight = keyframes`
from {
  opacity: 0;
  transform: translateX(50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`

  const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

  const FadeInLeftDiv = styled.div`
    animation: ${fadeInLeft} 1s ease;
  `

  const FadeInRightDiv = styled.div`
    animation: ${fadeInRight} 1s ease;
  `
  const FadeInUpDiv = styled.div`
    animation: ${fadeInUp} 1s ease;
  `
  return (
    <React.Fragment>
      <section className=" container my-5" id="projets">
        <div className="row justify-content-center mb-4">
          <h2 className="col-12 text-center" style={{ color: '#ff0000' }}>
            MES
            <span className="text-dark"> PROJETS</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-12  col-md-6 row" id="listProjets">
            <FadeInLeftDiv
              className="col-12 mb-5 mb-md-0 col-md "
              style={{ height: '100px' }}
            >
              <img
                src={projet1}
                alt="projet-1"
                className="rounded w-100 h-100"
              />

              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() => alert(mess)}
                  className="btn text-white w-100  fw-bold"
                  style={{
                    backgroundColor: '#2782de',
                    boxShadow: '0.5px 0.5px 5px ',
                  }}
                >
                  Création de motifs {'>'}
                </button>
              </div>
            </FadeInLeftDiv>

            <FadeInRightDiv className="col-12 mb-5 mb-md-0 col-md">
              <div
                className="p-2 rounded "
                style={{ backgroundColor: '#950202', height: '100px' }}
              ></div>
              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() => alert(mess)}
                  className="btn w-100  fw-bold"
                  style={{
                    backgroundColor: 'white',
                    color: '#950202',
                    boxShadow: '0.5px 0.5px 5px ',
                  }}
                >
                  Création Graphique {'>'}
                </button>
              </div>
            </FadeInRightDiv>

            <FadeInUpDiv className="col-12 my-0 my-md-2">
              <div
                className="p-2 rounded "
                style={{ backgroundColor: '#12508e', height: '100px' }}
              ></div>
              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() => alert(mess)}
                  className="btn w-100  fw-bold"
                  style={{
                    backgroundColor: 'white',
                    color: '#12508e',
                    boxShadow: '0.5px 0.5px 5px ',
                  }}
                >
                  Identité Visuelle de IWARI BENIN {'>'}
                </button>
              </div>
            </FadeInUpDiv>

            <div className=" row text-center my-2">
              <span className="col-12 col-md" style={{ fontSize: '10px' }}>
                <span className="fw-bold" style={{ color: '#2882de' }}>
                  + 1000{' '}
                </span>
                PROJETS
              </span>
              <span className="col-12 col-md" style={{ fontSize: '10px' }}>
                <span className="fw-bold" style={{ color: '#2882de' }}>
                  + 900{' '}
                </span>
                AVIS POSITIFS
              </span>
              <span className="col-12 col-md" style={{ fontSize: '10px' }}>
                <span className="fw-bold" style={{ color: '#2882de' }}>
                  + 500{' '}
                </span>
                RECOMMANDATIONS
              </span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Projets
