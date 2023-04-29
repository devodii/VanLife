import React from 'react'
import styled from 'styled-components'
import Section from './section'


const Container = styled.div`
height: 100vh;
`
function Home() {
  return (
    <Container>
      <Section title={"Model X"} 
        backgroundImg="Tesla-s.jpg"
         description="Order Online for Touchless Delivery" 
         leftBtn = "Custom Order"  rightBtn="Existing Inventory"/>
      <Section title = {"Model S"} backgroundImg="Tesla-Y.jpg"
       description="Order Online for Touchless Delivery" 
       leftBtn = "Custom Order"  rightBtn="Existing Inventory" />
      <Section title = {"Low Cost Solar Panels In America"} 
        backgroundImg="solar.jpg"
        description={"Money back guarantee"}
        rightBtn="Learn More"
        leftBtn="Order now" />
      <Section title = {"Model Z"}
       backgroundImg="Tesla-z.jpg"
       description="Order Online for Touchless Delivery" 
       leftBtn = "Custom Order"  rightBtn="Existing Inventory"
       />
       <Section title="Accessories" backgroundImg={"accessories.jpg"}
         description={"Money back guarantee"}
         leftBtn="Order now" />
    </Container>
  )
}

export default Home
