import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';
import Service from '../../api/todo/Service'

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: "",
            error:false
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        return (
            <div className="WelcomePage">
                <h1>Welcome</h1>
                <div className="container">
                    Hello.Welcome Page {this.props.match.params.name}. You can edit todo list <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click on this button to get a custumized Welcome Message
                    <div>
                        <button onClick={this.getMessage} className="btn btn-success">Click</button>
                    </div>
                </div>
                <div className="container">
                    <div>{this.state.Message}</div>
                </div>
            </div>
        )
    }

    getMessage = () => {
        //Service.executeservice().then((response)=>this.handleSuccessfullResponse(response))
        Service.executeservicewithpathvariable(this.props.match.params.name)
           .then((response) => this.handleSuccessfullResponse(response))
           .catch(error=>{this.handleErrorMessage(error)})
        // Service.executeserviceError()
        //     .then()
        //     .catch(error=>{this.handleErrorMessage(error)})
    }

    handleSuccessfullResponse = (response) => {

        this.setState(
            {
                Message: response.data.s
            }
        )
        console.log(this.state.Message)
    }

    handleErrorMessage = (error) => {

        this.setState(
            {
                error:true
            }
        )
        let errorMessage = ''
        if(error.message){
            errorMessage+=error.message
        }
        if(error.response && error.response.data){
            errorMessage+=error.response.data.message
        }
        this.setState(
            {
                Message:errorMessage
            }
        )

    }


}

export default withRouter(WelcomePage)
