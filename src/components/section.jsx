import React from 'react'
import {BsChevronDown} from "react-icons/bs"
import styled from 'styled-components'
import Fade from "react-reveal/Fade"




const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;

`
const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 280px));
    place-content: center;
    row-gap: 20px;
    column-gap: 20px;
`
const LeftBtn = styled.div`
    background-color: #282c34;
    color: #fff;
    padding-block: 5px;
    font-size: 15px;
    text-align: center;
    border-radius: 100px;
    cursor: pointer;
    text-transform: uppercase;
`
const RightBtn = styled(LeftBtn)`
    background-color: #fff;
    color: #000;
`
function Section({title, backgroundImg, description, rightBtn, leftBtn}) {
  
   return (
    <Wrap bgImg={backgroundImg}>
      
        <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <footer>
      <ButtonGroup>
        {leftBtn &&  <LeftBtn> {leftBtn} </LeftBtn> }   
        {rightBtn &&  <RightBtn> {rightBtn} </RightBtn>}
       
      </ButtonGroup>
            <BsChevronDown className='swing--scroll'/>
      </footer>
      </Fade>
     
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 6vh;
    background-image: ${props => `url("/Images/${props.bgImg}")`};


    footer {
        display: flex;
        flex-direction:  column;
        gap: 20px
    }
    .swing--scroll {
        color: #fff;
        margin: 0 auto;
        font-size: 25px;
        font-weight: 800;
        cursor: pointer;
        animation: swing infinite 1s;
    }

    @keyframes swing {
        0% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(-3px)
        }
    }

`

export default Section
