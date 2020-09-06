import React from 'react'
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom'

import Home from './Home'
import { AuthProvider } from './authentication/auth'

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/" />
        </Switch>
    </Router>
)