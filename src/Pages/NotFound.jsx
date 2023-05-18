import React from 'react'
import { Link } from 'react-router-dom';
import  styled from "styled-components"
const NotFound = () => {
  return (
    <Container>
          <h1>Sorry, the page that you requested was not fou</h1>
          <Link to={"/"}>Return to home</Link>
    </Container>
  )
}

const Container = styled.div`
    a {
        background-color: #000;
        color: #fff;
        width: 100%;
        padding: 5px 50px;
        text-align: center;

    }
`
export default NotFound
