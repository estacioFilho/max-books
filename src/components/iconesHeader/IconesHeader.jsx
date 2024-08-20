import React from 'react'
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'

const IconesHeaderContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
`
const IconeContainer = styled.img`
    width: 2.5em;
    height: 2.5em;
`

const IconesHeader = () => {
  const icones = [profile, bag]
  return (
    <IconesHeaderContainer>
      {
        icones.map((icone, index) => (
          <a href=" ">
            <IconeContainer key={index} src={icone} alt="icone" />
          </a>
        ))}
    </IconesHeaderContainer>
  )
}

export default IconesHeader;