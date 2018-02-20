import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomPageDashboard from './CustomPageDashboard'
import CustomPageUsersList from "./CustomPageUsersList";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const CustomPage = () => (
    <main>
        <Switch>
            /*<Route exact path='/' component={CustomPageDashboard}/>*/
            <Route path='/dashboard' component={CustomPageDashboard}/>
            <Route path='/users' component={CustomPageUsersList}/>
        </Switch>
    </main>
)

export default CustomPage