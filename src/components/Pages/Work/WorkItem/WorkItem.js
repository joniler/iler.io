import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const WorkItem = (props) => {
    return(
        <div className="workItem">
            <div className="workHeader">
                <div>
                    <h2>Chicago Commons</h2>
                    <h3>Web Design</h3>
                </div>
                <div className="wiNav">
                    <a target="_blank" rel="noopener noreferrer" href="https://chicagocommons.org/">
                        <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                    </a>
                    <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                </div>
            </div>
            <div className="workContent">
                <p>Chicago Commons needed us to give their site a complete overhaul to not only apply their new branding but make the site more engaging for their users and easier to use for the staff. A priority was placed on the results of their highly successful programs so we tried to make what could be boring data on a spreadsheet jump off the page with color and typographic elements.</p>
            </div>
        </div>
    )
}

export default WorkItem;