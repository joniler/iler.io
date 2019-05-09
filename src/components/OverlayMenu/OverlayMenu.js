import React from 'react';
import OverlayMenuItems from './OverlayMenuItems/OverlayMenuItems';
import './OverlayMenu.scss'

const OverlayMenu = (props) => {

    const overlayMenuItems = props.overlayMenu.map((mi, i) => {
        return(
            <OverlayMenuItems
                overlayClickHandler={props.overlayClickHandler}
                item={mi.item}
                icon={mi.icon}
                key={mi.key}
                id={mi.key}
                active={mi.active}
                i={i}
                menuHandler = {props.menuHandler}
            />
        )
    })

    return(
        <div className={"overlayMenu"}>
			{overlayMenuItems}
        </div>
    )
}

export default OverlayMenu;