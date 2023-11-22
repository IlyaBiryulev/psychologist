import React from 'react';
import './ModalToolTip.css'

function ModalToolTip({isOpen, isSucces, isError, onClose, textSucces, textError}) {
    const infoTooltipText = () => {
        if (isSucces) {
          return textSucces;
        } else if (isError) {
          return textError;
        }
      }
    
      return (
        <div>
          <section className={`tooltip ${isOpen && 'tooltip_opened'}`}>
              <div className="tooltip__container">
                <p className='tooltip__reg-status'>{infoTooltipText()}</p>
                <button className="tooltip__close-button" type="button" onClick = {onClose}></button>
              </div>
            </section>
        </div>
      );
}

export default ModalToolTip;