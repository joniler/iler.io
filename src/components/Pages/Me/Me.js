import React from 'react';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import './Me.scss';

const Me = (props) => {
    return(
        <div className="pageMe">
            <div className="dL">
                <div className="dlHeader"></div>
                <div className="photo"></div>
                <div className="col1"></div>
                <div className="col2"></div>
            </div>
            <div className="bio">
                <h2><span role="img" aria-label="hello">👋</span> Hi! I'm Jon.</h2>
                <p>A few years ago I fell in love with seeing the fruits of my labor come to life both on the screen and physically in front of me. I have found joy in expressing myself through code, UI/UX, interactive design, and audio/visual experiences. Hope you like what you see, and if so, I can't wait to work together!</p>
                <p></p>
            </div>
        </div>
    )
}

export default OverlayModal(Me);