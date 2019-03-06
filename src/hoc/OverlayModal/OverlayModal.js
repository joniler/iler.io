import React from 'react';
import './OverlayModal.scss';

const OverlayModal = (WrappedComponent) => {
    return(props) => {
        return(
            <div className="overlayModal">
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default OverlayModal;