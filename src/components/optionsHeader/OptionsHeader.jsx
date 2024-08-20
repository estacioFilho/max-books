import React from 'react'
import styled from 'styled-components';

const OptionsHeaderContainer = styled.ul`
    display: flex;  
    align-items: center;
    justify-content:center ;
    gap: 2em;
`

const OptionContainer = styled.li`
    text-transform: uppercase;
    color:#002f52;
    cursor: pointer;
    font-size: clamp(1.5em, 2em, 2.5em) 
`


function OptionsHeader() {
    const options = ['categorias', 'favoritos', 'minha estante'];
    return (
        <OptionsHeaderContainer className='optionsHeader'>
            {options.map((option, index) => (
                <OptionContainer key={index}>{option}</OptionContainer>
            ))}
        </OptionsHeaderContainer>
    )
}

export default OptionsHeader