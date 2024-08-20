import React from 'react'
import LogoType from '../logotype/Logotype'
import OptionsHeader from '../optionsHeader/OptionsHeader';
import IconesHeader from '../iconesHeader/IconesHeader';
import styled from 'styled-components'

 const HeaderConteiner = styled.header`
    width: 100%;
    background-color: rgb(248, 248, 248);
    display: flex;
    justify-content: center;
 `

function Header() {
  return (
    <HeaderConteiner>
      <LogoType/>
      <OptionsHeader/>
      <IconesHeader/>
    </HeaderConteiner>
  )
}

export default Header;