import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <Container>
      &copy; {year} VanLife
    </Container>
  )
}

const Container = styled.footer `
   
    display: flex;
    align-items: center;
    justify-content: center;
   margin-top: 20px;
`
export default Footer
 