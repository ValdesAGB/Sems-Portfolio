import React from 'react'
import projet1 from '../assets/projet1.png'

function Projets() {
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
          <div className="col-6 row">
            <div className="col" style={{ height: '100px' }}>
              <img
                src={projet1}
                alt="projet-1"
                className="rounded w-100 h-100"
              />

              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() =>
                    alert("Un pop s'ouvrira pour détailler ce projets")
                  }
                  className="btn text-white w-100  fw-bold"
                  style={{
                    backgroundColor: '#2782de',
                    boxShadow: '0.5px 0.5px 5px ',
                  }}
                >
                  Création de motifs {'>'}
                </button>
              </div>
            </div>

            <div className="col">
              <div
                className="p-2 rounded "
                style={{ backgroundColor: '#950202', height: '100px' }}
              ></div>
              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() =>
                    alert("Un pop s'ouvrira pour détailler ce projets")
                  }
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
            </div>

            <div className="col-12 my-2">
              <div
                className="p-2 rounded "
                style={{ backgroundColor: '#12508e', height: '100px' }}
              ></div>
              <div style={{ marginTop: '-20px' }}>
                <button
                  onClick={() =>
                    alert("Un pop s'ouvrira pour détailler ce projets")
                  }
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
            </div>

            <div className=" row text-center">
              <span className="col" style={{ fontSize: '10px' }}>
                <span className="fw-bold" style={{ color: '#2882de' }}>
                  + 1000{' '}
                </span>
                PROJETS
              </span>
              <span className="col" style={{ fontSize: '10px' }}>
                <span className="fw-bold" style={{ color: '#2882de' }}>
                  + 900{' '}
                </span>
                AVIS POSITIFS
              </span>
              <span className="col" style={{ fontSize: '10px' }}>
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
