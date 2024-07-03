import React from 'react'
import Dashboard from './Dashboard'
import Graph from './Graph'
import './Home.css'

const Home = () => {
  return (
    <div className='main-content'>
      <Dashboard />
      <Graph />
    </div>
  )
}

export default Home
