import React, { Component } from 'react';
import Headers from '../../containers/Headers';
import Footers from '../../containers/Footers';

class LayoutsContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="layout-container">
                <Headers />
                <div className="router-content">
                    { this.props.children }
                </div>
                <Footers />
            </div>
        )
    }
}

export default LayoutsContainer;