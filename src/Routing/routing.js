import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './../components/home'
import LoginRegister from './../components/LoginRegister'



class Routing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/LoginRegister' component={LoginRegister} />
                 </Switch>


            </React.Fragment>
        )
    }
}
export default Routing