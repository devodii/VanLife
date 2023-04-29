import styled from 'styled-components'
import {FiMenu} from "react-icons/fi"
import React, {useState} from "react"
import {GrClose} from "react-icons/gr"
import { selectCars } from '../Redux/car/carslice'
import { useSelector, useDispatch } from 'react-redux'

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 2;
`
const Models = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-transform: uppercase;
    width: max-content
  }
 

  @media screen and (max-width: 768px) {
      display: none;
  }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
      text-transform: uppercase;
      width: max-content
    }
`
function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)




  return (
    <Container>
       <a>
          <img src="/images/logo.png"
           alt="Tesla" 
           width={50}/>
       </a>

       <Models>

          {cars && cars.map((car, index) => (
            <a href='#' key={index}>{car}</a>
          ))}

       </Models>

       <RightMenu>
          <a href="/shop">Shop</a>
          <a href="/account">Tesla Account</a>
          <FiMenu onClick={() => setBurgerStatus(true)} style={{cursor: "pointer"}}/>
       </RightMenu>

       <BurgerNav show={burgerStatus}>
        <div className='close--x'>
        <GrClose onClick={() => setBurgerStatus(false)}/>
        </div>
        <ul>
          {cars && cars.map((car, index) => (
            <li key={index}><a href="/">{ car }</a></li>
          ))}
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          <li><a href="/">Trade-in</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadaster</a></li>
          <li><a href="/">Charging</a></li>
        </ul>
       </BurgerNav>
    </Container>
  )
}


const BurgerNav = styled.div`
position: fixed;
right: 0;
top: 0;
bottom: 0;
background-color: #fff;
width: 300px;
z-index: 100;
display: flex;
transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
transition: transform .3s ease-in-out;
flex-direction: column;
padding: 10px 20px;

.close--x {
  text-align: end;
  font-size: 25px;
  cursor: pointer;
}

ul {
  list-style-type: none;
}
li {
  padding: 15px 0;
  border-bottom:  1px solid rgba(0,0,0,0.2);

  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    font-weight: 600;
    
  }
}
  

`

export default Header
