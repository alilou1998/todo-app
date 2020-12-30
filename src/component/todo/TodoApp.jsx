import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../../App.css'
import AuthentificationRouter from './AuthentificationRouter'
import LoginComponent from './LoginComponent'
import ListTodos from './ListTodos'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomePage from './WelcomePage'
import ErrorPage from './ErrorPage'
import TodoForm from "./TodoForm";

export class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthentificationRouter path="/logout" component={LogoutComponent} />
                            <Route path="/homepage/:name" component={WelcomePage} />
                            <AuthentificationRouter path="/todos/:id" component={TodoForm}/>
                            <AuthentificationRouter path="/todos" component={ListTodos} />

                            <Route component={ErrorPage} />
                        </Switch>
                        <FooterComponent />

                    </>
                </Router>
            </div>
        )
    }
}


export default (TodoApp)














//Wrong username or password
/* function ShowFailMessage(props){
    if(props.LoginFailed===true){
        return <div>Login Failed</div>
    }
    else{
        return null
    }
}
//Correct password and username
function ShowSuccessMessage(props){
    if(props.LoginSuccess===true){
        return <div>Login Success</div>
    }
    else{
        return null
    }

} */






