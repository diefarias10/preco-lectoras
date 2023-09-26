import React from "react";
import "./UserInput.css";

export default function UserInput({ label, inputType, placeholder }) {
    return (
        <div className="userInput">
            <span className="label"> {label} </span>
            <input type={inputType} placeholder={placeholder}/>
        </div>

    )
}