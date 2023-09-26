import React from "react";
import "./Button.css";

export default function Button({ text, type, action }) {
    return (

        <button className={'button ' + type} onClick={action}>
            {text}
        </button>

    );
}