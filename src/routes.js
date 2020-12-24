import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Teste from './Pages/Teste'

function Routes() {
  return (
  <HashRouter >
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/teste' component={Teste} />
        <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  </HashRouter>
  )
}

export default Routes;