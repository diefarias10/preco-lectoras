import React from "react";
import "./UserInput.css";

export default function UserInput({ label, value, inputType, placeholder, action }) {
    return (
        <div className="userInput">
            <span className="label"> {label} </span>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={e => action(e.target.value)} />
        </div>

    )
}