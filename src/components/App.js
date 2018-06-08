"use strict"
import React, {Component} from "react"
import {Router, Route, Switch, Redirect, Link} from "react-router-dom"
import {connect} from "react-redux"
import history from "../routers/history"
import * as actions from "../actions"
import QuakesMain from "./quakes/QuakesMain"
import TrailMain from "./trail/TrailMain"


const Home = () => (
    <div>
        <Link className="button is-primary" to="/earthquakes">Earthquakes</Link>
        <Link className="button is-primary" to="/trail">Trails</Link>
    </div>
)

/**
 * The driver of the client application
 * @function App
 *
 * For Route using exact and exact={true} is equivalent. React will treat it the same.
 * @description
 */
class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/earthquakes" component={QuakesMain} exact/>
                        <Route path="/trail" component={TrailMain} exact/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

/**
 * arg1 - map the state to props to pass
 * arg2 - map dispatch to props to pass
 * They are passed as props to the components in this case App
 * @function connect
 */



export default connect(null, actions)(App)
