import React from 'react';
import './OverlayContainer.scss';
import '../ActivitySwitcher/ActivitySwitcher';
import ActiviySwitcher from '../ActivitySwitcher/ActivitySwitcher';

const OverlayContainer = (props) => {
    
    return(
        <div className={"overlayContainer" + (props.active ? ' active' : '')}>
            <ActiviySwitcher menu={props.menu} />
        </div>
    )
}

export default OverlayContainer;