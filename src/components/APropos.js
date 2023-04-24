import React from 'react'
import styled from 'styled-components'
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

  const ImageDiv = styled.div`
    border-radius: 100%;
  `

  return (
    <React.Fragment>
      <SectionAPropos>
        <div className="container my-5" id="apropos">
          <div className="mb-3">
            <h3>{title.toUpperCase()}</h3>
            <div className="col-2 p-1 bg-white"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-4">
              <p className="fw-light">
                Brand Designer depuis plusieurs années; je sais faire ressortir
                le meilleur de votre activité avec des designs uniques et
                convaincants.
              </p>
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
            <div className="col-4 offset-3">
              <img
                src="https://img.freepik.com/photos-premium/portrait-souriant-psychologue-femme-professionnelle-assis-dans-son-bureau_23-2148026303.jpg"
                alt="designer-cover"
                className="w-100 rounded-2"
              />
            </div>
          </div>
        </div>
      </SectionAPropos>
    </React.Fragment>
  )
}

export default APropos
