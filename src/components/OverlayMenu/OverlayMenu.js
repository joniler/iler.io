import React from 'react';
import OverlayMenuItems from './OverlayMenuItems/OverlayMenuItems';
import './OverlayMenu.scss'

const OverlayMenu = (props) => {

    const overlayMenuItems = props.overlayMenu.map((mi, i) => {
        return(
            <OverlayMenuItems
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
        <div className={"overlayMenu" + (props.active ? ' active' : '')}>
			{overlayMenuItems}
        </div>
    )
}

export default OverlayMenu;