import React from 'react';
import Sidebar from './components/Dashboard';
import Dashboard from './components/Sidebar2';
import Graph from './components/Graph';


const Home = () => {
  return (
    <div>
      <div className='home-div'>
      <div  style={{ display: 'flex' }}>
      
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
       
       <Dashboard />
      </div>
      <div>
        <Graph />
        </div>
    </div>
      </div>
    </div>
  )
}

export default Home
