import React from 'react';
import './OverlayModal.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const OverlayModal = (WrappedComponent) => {
    return(props) => {
        return(
            <div className="overlayModal">
                <div onClick={props.overlayClose} className="closeButton"><FontAwesomeIcon icon="times-circle"/></div>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default OverlayModal;