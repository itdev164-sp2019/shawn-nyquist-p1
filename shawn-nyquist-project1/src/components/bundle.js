import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SelectButton from '../Pages/select'
import RandomButton from '../Pages/random'
import App from '../App'


const Bundle = () => (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/select' component={SelectButton}/>
        <Route path='/random' component={RandomButton}/>
      </Switch>
    </main>
  )
  
  export default Bundle