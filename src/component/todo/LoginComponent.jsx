import React, {Component} from 'react'
import Authentification from './Authentification.js'
// import {withRouter} from 'react-router';
//import {API_URL} from "./Constants";
//import Axios from "axios";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'root',
            password: '',
            LoginFailed: false,
            LoginSuccess: false
        }

        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
    }


    handlerChange(event) {

        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    submit() {

        // if (this.state.username === "root" && this.state.password === "toor") {
        //     Authentification.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/homepage/${this.state.username}`)
        //     this.setState(
        //         {
        //             LoginSuccess: true,
        //             LoginFailed: false
        //         }
        //     )
        // } else {
        //     this.setState(
        //         {
        //             LoginSuccess: false,
        //             LoginFailed: true
        //         }
        //     )
        // }
        Authentification.executeJWTAuthentificationService(this.state.username, this.state.password)
            .then(response => {

                Authentification.executeJWTAuthentificationToken(this.state.username, response.data.token)

                // this.setState(
                //     {
                //         LoginSuccess: true,
                //         LoginFailed: false
                //     }
                // )
                this.props.history.push(`/homepage/${this.state.username}`)

            })
            .catch(() => {
                this.setState(
                    {
                        LoginSuccess: false,
                        LoginFailed: true
                    }
                )
            })

        // Authentification.executeBasicAuthentificationservice(this.state.username, this.state.password)
        //     .then(() => {
        //             Authentification.registerSuccessfulLogin(this.state.username, this.state.password)
        //             this.props.history.push(`/homepage/${this.state.username}`)
        //             this.setState(
        //                 {
        //                     LoginSuccess: true,
        //                     LoginFailed: false
        //                 }
        //             )
        //         }
        //     )
        //     .catch(()=>{
        //         this.setState(
        //             {
        //                 LoginSuccess: false,
        //                 LoginFailed: true
        //             }
        //         )
        //     })
    }

    render() {
        return (
            <div className="LoginComponent">
                {/* <ShowFailMessage LoginFailed={this.state.LoginFailed}/> */}
                {/* <ShowSuccessMessage LoginSuccess={this.state.LoginSuccess}/> */}

                <div>
                    <h4>Sign in</h4><br/><br/>
                    <div className="container">
                        {this.state.LoginFailed && <div className="alert alert-warning">Login Failed</div>}
                        {this.state.LoginSuccess && <div className="alert alert-success">Login Success</div>}
                    </div>

                    <div>
                        <label>Username : </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}
                               placeholder="UserName"/>
                    </div>
                    <div>

                        <label>Password : </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}
                               placeholder="******"/>
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={this.submit}> Login</button>
                    </div>
                </div>
            </div>


        )
    }
}


export default LoginComponent