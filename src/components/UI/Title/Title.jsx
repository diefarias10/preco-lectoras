import React from "react";
import "./Title.css";

export default function Title({ text, color }) {
    return (
        <span style={{ fontSize: '22px', color: color, fontWeight:"bold"}}>
            {text}
        </span>
    );
}