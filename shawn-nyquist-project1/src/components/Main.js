import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App'
import SelectPage from '../Pages/select'
import RandomPage from '../Pages/random'
import BeerListPage from '../Pages/beer-list'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/select' component={SelectPage}/>
            <Route path='/random' component={RandomPage}/>
        </Switch>
    </main>
)

export default Main