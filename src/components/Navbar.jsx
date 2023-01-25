//Imports
// React imports
import React from 'react'

// Asset imports
import Instagram from '../images/instagram.png'
import YouTube from '../images/youtube.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <img src="../src/images/globe.png" />
      <h2>
        Wildlife Tours{' '}
        <span className="nav--span"> - my photographic bucket list</span>
      </h2>
    </nav>
  )
}
