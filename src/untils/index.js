import styled from 'styled-components'

export const fontFamilly = {
  brand: `"Berlin Sans FB Demi", "Cooper Black", sans-serif `,
  fontFamily2: `calibri, "Cooper Black", sans-serif `,
}

const Contact = styled.button`
  background-color: red;
  color: white;
  &:hover {
    background-color: red;
    color: white;
  }
`

export const allButton = {
  contact: <Contact className="btn rounded-5">Contactez-moi</Contact>,
}
