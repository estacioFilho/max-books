import React from 'react';
import logo from '../../images/logo.svg';
import styled from 'styled-components'

const LogoTypeContainer = styled.div`
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-size: 4em ;
`

const LogoType = () => {
  return (
    <LogoTypeContainer>
      <img src={logo} alt="Logo da MaxBooks" />
      <p><strong>Max</strong>Books</p>
    </LogoTypeContainer>      
  )
}

export default LogoType;