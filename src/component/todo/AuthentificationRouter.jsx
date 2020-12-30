import React, {Component} from 'react'
import Authentification from './Authentification'
import {Redirect, Route} from 'react-router-dom'

export class AuthentificationRouter extends Component {
    render() {
        if(Authentification.isUserLoggedIn()){
            return(
                <Route {...this.props}/>
            )
        }else{
            return(
                <Redirect to="/login"/>
            )
        }
    }
}

export default AuthentificationRouter
