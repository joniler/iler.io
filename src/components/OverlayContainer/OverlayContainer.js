import React, { Component } from 'react';
import './OverlayContainer.scss';

class OverlayContainer extends Component {
    render() {
        return(
            <div className={"overlayContainer " + (this.props.active ? 'active' : '')}>
                
            </div>
        )
    }
}

export default OverlayContainer;