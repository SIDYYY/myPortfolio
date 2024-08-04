import React from 'react';
import './projects/que.css';

function Modal({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (

        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button className="close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
