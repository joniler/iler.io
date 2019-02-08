import React from 'react'
import DayCycleItem from './DayCycleItem/DayCycleItem'
import './DayCycle.scss'
// import sunrise from '../../../images/animation/timeOfDay/sunrise.svg'
// import day from '../../../images/animation/timeOfDay/day.svg'
// import sunset from '../../../images/animation/timeOfDay/sunset.svg'
// import dusk from '../../../images/animation/timeOfDay/dusk.svg'
// import night from '../../../images/animation/timeOfDay/night.svg'

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


