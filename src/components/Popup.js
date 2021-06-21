import React from 'react';
import './Popup.css';


function Popup(props) {

    return (props.trigger) ? (
        <div cllassName = 'popup'>
            <div className = 'popup-inner'>
            {//once a user clicks the close button, the trigger will be set to false which will lead to popup to close
            }    
            <button className = 'close-btn btn-dark d-block' onClick = {() => props.setTrigger(false) }>
                Close</button>
                    { props.children }
                
            </div>
        </div>
    ) : '';
} 

export default Popup;