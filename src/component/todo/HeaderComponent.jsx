import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';
import Authentification from './Authentification.js'

class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = Authentification.isUserLoggedIn()
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="website" className="navbar-brand">Website</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link"
                                  to={`/homepage/${Authentification.getLoggedInUsername()}`}>Home</Link></li>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">TodoList</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn &&
                        <li><Link className="nav-link" to="/logout" onClick={Authentification.logout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)
