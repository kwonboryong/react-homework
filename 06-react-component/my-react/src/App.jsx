// import React from 'react'
import Appcopy from './Appcopy.jsx'
import './App.css'

function App() {

  return (
    <>
    <ul className="ProfileList">
      <li>
        <Appcopy name="슬비쌤" img="woman-01.jpg" description="online" />
      </li>
      <li>
        <Appcopy name="범쌤" img="man-01.jpg" description="away" />
      </li>
      <li>
        <Appcopy name="야무쌤" img="man-02.jpg" description="away" />
      </li>
    </ul>
    </>
  )
}

export default App
