import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'

import Logon from './pages/logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/newIncident'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register"  exact component={Register}/>
        <Route path="/profile"  exact component={Profile}/>
        <Route path="/incidents/new"  exact component={NewIncident}/>
      </Switch>
    </BrowserRouter>
  )
}