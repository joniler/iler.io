import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const WorkItem = (props) => {
    return(
        <div className="workItem">
            <div className="workHeader">
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div className="wiNav">
                    <a target="_blank" rel="noopener noreferrer" href={props.link}>
                        <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                    </a>
                    {/* <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/> */}
                </div>
            </div>
            <div className="workContent">
                <p>{props.copy}</p>
            </div>
        </div>
    )
}

export default WorkItem;