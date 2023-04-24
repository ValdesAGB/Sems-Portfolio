import React from 'react'
import styled from 'styled-components'
import { fontFamilly } from '../untils'

function Acceuil() {
  const welcome = `Hello everyone!. Mon nom est Sems Clarita`
  const post = `Brand Designer`
  const enjoy = ` J'ai hâte de vous en dire plus sur moi et vous montrer mes travaux.`
  const SectionAccueil = styled.section`
    background: linear-gradient(
      90deg,
      rgba(47, 132, 218, 1) 35%,
      rgba(38, 127, 218, 1) 100%
    );
  `
  const ContentDiv = styled.div`
    color: white;
  `
  const Button = styled.button`
    color: red;
  `

  return (
    <React.Fragment>
      <SectionAccueil className="py-4" id="accueil">
        <div className="container my-4">
          <div className="row justify-content-center">
            <ContentDiv className="col-5 text-center">
              <h5 className="welcome fw-light">{welcome}</h5>
              <h2 className="my-3 post fw-light">
                Je suis
                <span className="postBrand fw-bold"> {post}</span>
              </h2>
              <h5 className="enjoy fw-light">{enjoy}</h5>
            </ContentDiv>
          </div>
        </div>
        <div className="text-center">
          <a href="#contact" className="text-decoration-none col text-end">
            <button className="btn border-white text-white">
              Contactez-moi
            </button>
          </a>
          <a href="#projets" className="text-decoration-none col text-end">
            <Button className="btn bg-white offset-1">Voir mes projets</Button>
          </a>
        </div>
      </SectionAccueil>
    </React.Fragment>
  )
}

export default Acceuil

/*

.welcome {
      color: white;
      font-weight: 550;
    }
    .post {
      font-weight: lighter;
      color: white;
    }
    .post .postBrand {
      font-weight: bold;
    }
    .enjoy {
      font-weight: 400;
      color: white;
    }

*/
