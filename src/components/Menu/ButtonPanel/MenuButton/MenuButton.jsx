import React from "react";
import "./MenuButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MenuButton({ text, icon }) {

    return (
        <div className="menuButton">
            <div className="iconArea">
                <FontAwesomeIcon icon={icon} color="#F5F5F5" />
            </div>
            <div className="textArea">
                <p> {text} </p>
            </div>
        </div>
    );
}