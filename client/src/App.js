import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
      </Switch>
    </HashRouter>
  )
}

export default App
