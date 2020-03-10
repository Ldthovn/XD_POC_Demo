import React, { useEffect } from 'react'
// Config
import { cesiumToken } from './config'
import { Ion } from 'cesium'
// Pages
import NotFoundPage from './components/pages/NotFoundPage'
// import HomePage from './components/pages/HomePage'
import DemoPage from './components/pages/DemoPage'
// Routing
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// MobX
import { Provider } from 'mobx-react'
import commonStore from './stores/commonStore'
import demoStore from './stores/demoStore'
import gpsStore from './stores/gpsStore'
// Styles
import './App.less'
const stores = {
  commonStore,
  demoStore,
  gpsStore
}

const history = createBrowserHistory()

const App = () => {
  Ion.defaultAccessToken = cesiumToken
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={DemoPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
