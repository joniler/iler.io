import React, { Component } from 'react';
import Me from '../Pages/Me/Me';
import './OverlayContainer.scss';

class OverlayContainer extends Component {
    render() {
        return(
            <div className={"overlayContainer" + (this.props.active ? ' active' : '')}>
                <Me/>
            </div>
        )
    }
}

export default OverlayContainer;