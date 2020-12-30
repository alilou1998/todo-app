import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ErrorPage extends Component {
    render() {
        return (
            <div className="ErrorPage">
                Sorry this page is unreachable.Please contact support.

            </div>

        )
    }
}

export default withRouter(ErrorPage)
