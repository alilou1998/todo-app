import React, { Component } from 'react'
import { withRouter } from 'react-router';

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <span className="text-muted">All right reserved 2020 @ALIOS</span>
            </div>
        )
    }
}

export default withRouter(FooterComponent)
