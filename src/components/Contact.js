import React from 'react'
import styled from 'styled-components'

function Contact() {
  const I = styled.i`
    &:hover {
      cursor: pointer;
    }
  `
  return (
    <React.Fragment>
      <section style={{ backgroundColor: '#fff2f2' }} id="contact">
        <div className="container my-5 text-center">
          <h4 style={{ color: 'red' }} className="mb-4">
            BESOIN DE <span style={{ color: 'black' }}>MES SERVICES?</span>
          </h4>
          <div className="">
            <h5 className="mb-4">Contactez-moi</h5>
            <I
              onClick={() =>
                alert('Vous serez conduire vers ce réseau du sujet.')
              }
              style={{
                backgroundColor: '#2782de',
                color: 'white',
                borderRadius: '50%',
              }}
              className="p-2 fs-5 mx-3 bi bi-telephone-fill"
            ></I>
            <I
              onClick={() =>
                alert('Vous serez conduire vers ce réseau du sujet.')
              }
              style={{
                backgroundColor: '#2782de',
                color: 'white',
                borderRadius: '50%',
              }}
              className="p-2 fs-5 mx-3 bi bi-envelope-fill"
            ></I>
            <I
              onClick={() =>
                alert('Vous serez conduire vers ce réseau du sujet.')
              }
              style={{
                backgroundColor: '#2782de',
                color: 'white',
                borderRadius: '50%',
              }}
              className="p-2 fs-5 mx-3 bi bi-linkedin"
            ></I>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
