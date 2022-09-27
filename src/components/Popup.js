import React from 'react'
import { useEffect } from "react";
import "./Popup.css"


function Popup(props) {
    useEffect(() => {
        console.log("rendered")
    })
    if(props.PopupName == props.currentPopup){
        return (
            <div className="PopupWrapper">
                <div className="clickOutside" onClick={() => console.log(props.setCurrentPopup(null))}></div>
                <div className="PopupBackground">
                <span onClick={() => console.log(props.setCurrentPopup(null))} className="closeButton material-symbols-outlined">
                    close
                </span>
                    {props.children}
                </div>
            </div>
        )
    }
    return "";
}

export default Popup