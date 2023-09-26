import React from "react";
import { useEffect, useState } from "react";
import "./UserControls.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function UserControls() {
    return (
        <div className="userControls">
            <FontAwesomeIcon icon={faCommentDots} color="#1B262C" />
            <FontAwesomeIcon icon={faPenToSquare} color="#1B262C" />
        </div>
    );
}