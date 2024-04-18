import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Projects() {


  // return (
  //   <Link href="https://github.com/TravisSLee/My_Tunes">My_Tunes</Link>
  // )
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="https://github.com/TravisSLee/My_Tunes">My_Tunes</Nav.Link>
      {/* <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link> */}
    </Nav>
  )  
}
