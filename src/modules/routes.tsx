import React, {useEffect} from 'react'
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom'

import Home from './Home'

export default () => (

    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/" />
        </Switch>
    </Router>
)