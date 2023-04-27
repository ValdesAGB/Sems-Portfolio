import React from 'react'
import styled, { keyframes } from 'styled-components'
import designer from '../assets/designer.jpg'

function APropos() {
  const title = `à propos de moi`

  const SectionAPropos = styled.section`
    background: linear-gradient(
      90deg,
      rgba(47, 132, 218, 1) 35%,
      rgba(38, 127, 218, 1) 100%
    );
    color: white;
  `

  const zoomInAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

  const AnimatedCover = styled.img`
    animation: ${zoomInAnimation} 1s both;
  `

  return (
    <React.Fragment>
      <SectionAPropos id="apropos">
        <div className="container my-5">
          <div className="mb-3 row justify-content-center justify-content-md-start">
            <div className="col-12  ">
              <h3 className=" text-center text-md-start ">
                {title.toUpperCase()}
              </h3>
            </div>
            <div className="col-5 col-md-2 ms-0 ms-md-3 p-1 bg-white"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-md-4 my-2 my-md-0">
              <p className="fw-lighter text-center text-md-start">
                Brand Designer depuis plusieurs années; je sais faire ressortir
                le meilleur de votre activité avec des designs uniques et
                convaincants.
              </p>
              <button
                className="btn bg-white rounded-5 text-danger d-none d-md-block"
                onClick={() =>
                  alert(
                    'Via ce bouton vous pourrez télécharger le CV du sujet.'
                  )
                }
              >
                Télécharger mon CV
              </button>
            </div>
            <div className="col-12 col-md row justify-content-center my-5  mx-1 mx-md-0 my-md-0 ">
              <div className="col-md-6 ">
                <AnimatedCover
                  src="https://img.freepik.com/photos-premium/portrait-souriant-psychologue-femme-professionnelle-assis-dans-son-bureau_23-2148026303.jpg"
                  alt="designer-cover"
                  className="w-100 rounded-2"
                />
              </div>
            </div>

            <div className="text-center d-md-none">
              <button
                className="btn bg-white rounded-5 text-danger"
                onClick={() =>
                  alert(
                    'Via ce bouton vous pourrez télécharger le CV du sujet.'
                  )
                }
              >
                Télécharger mon CV
              </button>
            </div>
          </div>
        </div>
      </SectionAPropos>
    </React.Fragment>
  )
}

export default APropos
