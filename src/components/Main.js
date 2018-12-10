import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Sermons from './Sermons/Sermons'
import Giving from './Giving'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/sermons' component={Sermons}/>
            <Route exact path='/giving' component={Giving}/>
        </Switch>
    </main>
)

export default Main