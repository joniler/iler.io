import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './OverlayMenuItems.scss'

const OverlayMenuItems = (props) => {
    return(
        <div id={props.id} className={"menuItem " + props.item + " " + (props.active ? 'active' : '')} onClick={() => props.menuHandler(props.i) && props.overlayClickHandler()}>
            <FontAwesomeIcon icon={props.icon} />
            <span className="menuItemLabel">{props.item.toUpperCase()}</span>
        </div>
    )
}

export default OverlayMenuItems;
