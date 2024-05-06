import React from 'react'
import NavBar from './components/NavBar'
import Description from './components/Description'
import Grid from './components/Grid'

const App = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Description/>
      </div>
      <div>
        <Grid/>
      </div>
    </div>
  )
}

export default App