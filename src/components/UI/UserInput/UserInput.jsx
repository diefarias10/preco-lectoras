import React, { useState } from "react";
import "./UserInput.css";

export default function UserInput({ label, value, inputType, action }) {
    return (
        <div className="userInput">
            <input
                type={inputType}
                value={value}
                onChange={e => action(e.target.value)} required />
            <label>{label}</label>
        </div>

    )
}

//<span className="label"> {label} </span>