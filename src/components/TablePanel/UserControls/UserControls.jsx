import React from "react";
import { useEffect, useState, useContext } from "react";
import "./UserControls.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import EditScannerForm from "../SlidePanel/EditScannerForm/EditScannerForm";
import { AppContext } from "../../../context/AppContext";

export default function UserControls({ scanner, getScannerData }) {
    const { editMode, createMode, toggleEditMode, toggleCreateMode, getScanners, scannerList } = useContext(AppContext)

    const sendData = () => {
        getScannerData(scanner)
    }

    return (
        <div className="userControls">
            <div>
                <FontAwesomeIcon icon={faCommentDots} color="#1B262C" />
            </div>

            <div onClick={sendData}>
                <FontAwesomeIcon icon={faPenToSquare} color="#1B262C" />
            </div>
        </div>
    );
}