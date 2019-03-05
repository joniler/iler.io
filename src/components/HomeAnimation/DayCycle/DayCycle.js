import React from 'react'
import DayCycleItem from './DayCycleItem/DayCycleItem'
import './DayCycle.scss'

const DayCycle = (props) => {

    const dayCycleItems = props.dayArray.map((da, index) => {

        return (
            <DayCycleItem
                time={da.time}
                active={da.active}
                key={da.key}
            />
        )

    });

    return(
        <div className="dayCycle">
           {dayCycleItems}
        </div>
    )
}



export default DayCycle;


