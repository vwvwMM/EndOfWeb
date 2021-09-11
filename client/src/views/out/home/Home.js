/* eslint-disable prettier/prettier */
import React from 'react'
import Dashboard from '../../dashboard/Dashboard'
import About from '../about/About'
import Contact from '../contact/Contact'
import History from '../history/History'
import Support from '../support/Support'
import Team from '../team/Team'

const Home = () => {
  return (
    <div style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Dashboard />
      <div id="about" className="p-4 bg-secondary mb-3 shadow rounded">
        <About />
      </div>
      <div id="history" className="p-4 bg-secondary mb-3 shadow rounded">
        <br />
        <br />
        <History />
      </div>
      <div id="team" className="p-4 bg-secondary mb-3 shadow rounded">
        <br />
        <br />
        <Team />
      </div>
      <div id="contact" className="p-4 bg-secondary mb-3 shadow rounded">
        <br />
        <br />
        <Contact />
      </div>
      <div id="support" className="p-4 bg-secondary mb-3 shadow rounded">
        <Support />
      </div>
    </div>
  )
}

export default Home
