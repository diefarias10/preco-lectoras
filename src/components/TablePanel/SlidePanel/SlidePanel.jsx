import React from "react";
import "./SlidePanel.css";

export default function SlidePanel({ children, visible}) {
    return (
        <div className={visible ? "slidePanel" : "hidden"}>
            {children}
        </div>
    );
}