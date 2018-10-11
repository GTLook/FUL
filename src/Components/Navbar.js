import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

const Nav = () => (
  <Navbar brand="Fuck You, I'm a Lawyer" right>
    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
)

export default Nav
