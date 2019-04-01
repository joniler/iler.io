import React, { Component } from 'react';
import Me from '../Pages/Me/Me';
import Work from '../Pages/Work/Work';
import './OverlayContainer.scss';

class OverlayContainer extends Component {
    const 
    render() {
        return(
            <div className={"overlayContainer" + (this.props.active ? ' active' : '')}>
                <Work/>
                {/* <Me/> */}
            </div>
        )
    }
}

export default OverlayContainer;