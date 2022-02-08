import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul>
  <li><a href='#1'><Link to ="/">Home</Link></a></li>
  <li><a href='#2'><Link to="about">About</Link></a></li>
  <li><a href='#3'><Link to="contact">Contact</Link></a></li>

</ul>
    </>
  )
}

export default Navbar
