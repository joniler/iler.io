import React from 'react';

const DayCycleItem = (props) => {
    return (
        <div className={`${props.time} cycleLayer ${(props.active === true) ? 'active' : ''}`}></div>
    )
}

export default DayCycleItem;