// Imports
// React impports
import React from 'react'

// Component imports
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'

// Data imports
import data from './data'

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />
  })

  return (
    <div>
      <Navbar />
      <Header />
      <section className="cards--list">{cards}</section>
    </div>
  )
}
