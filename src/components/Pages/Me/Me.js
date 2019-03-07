import React from 'react';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import './Me.scss';
import me from '../../../images/me.jpg';

const Me = (props) => {
    return(
        <div className="pageMe">
            <div className="bio">
                <div className="meHeader">
                    <img src={me} alt="Jon Iler" className="photo"/>
                    <h1><span role="img" aria-label="hello">👋</span> Hi! I'm Jon.</h1>
                </div>
                <p>I have always been fascinated by technology. After working for several years as an IT tech/admin, I knew that I didn't just want to interact with technology; I also wanted to contribute to creating it — in my own small way.</p>
                <p>I fell in love with seeing the fruits of my labor come to life both on the screen and physically in front of me. I have found joy in expressing myself through code, UI/UX, interactive design, and audio/visual experiences.</p>
                <p>In my spare time, I run a small boutique house music record label called Concise Music, and I enjoy anything and everything to do with motorcycling.</p>
            </div>
        </div>
    )
}

export default OverlayModal(Me);