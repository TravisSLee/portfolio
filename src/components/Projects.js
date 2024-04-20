import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Projects() {

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="https://github.com/TravisSLee/My_Tunes">My_Tunes</Nav.Link>
      <Nav.Link href="https://github.com/TravisSLee/My_Memorbilia">My_Memorbilia</Nav.Link>
      <Nav.Link href="https://github.com/TravisSLee/PokeLearner">PokeLearner</Nav.Link>
    </Nav>
  )  
}
