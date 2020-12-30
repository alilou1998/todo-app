import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';

class SideBarComponent extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <div className="bg-light border-light" id="sidebar-wrapper">
                        <div className="sidebar-heading display"></div>
                        <div className="list-group list-group-flush">
                            <Link to="" className="list-group-item list-group-item-action bg-light">Dictionnaire</Link>
                            <Link to="" className="list-group-item list-group-item-action bg-light">Levenshtein</Link>
                            <Link to="" className="list-group-item list-group-item-action bg-light">Traduction</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(SideBarComponent)
