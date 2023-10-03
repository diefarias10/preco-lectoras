import React, { useContext, useState } from "react";
import "./EditScannerForm.css";
import { AppContext } from "../../../../context/AppContext";
import UserInput from "../../../UI/UserInput/UserInput";
import SlidePanel from "../SlidePanel";
import Button from "../../../UI/Button/Button";
import Title from "../../../UI/Title/Title";


export default function EditScannerForm({ visible, scannerData }) {
    const { toggleEditMode, addScanner, scannerStates } = useContext(AppContext)

    const cancelEdition = () => {
        toggleEditMode()
    }

    const submitEdition = () => {
        toggleEditMode()
    }
    return (
        <SlidePanel visible={visible}>
            <div className="editScannerForm">
                <div className="titleArea">
                    <Title text={"Editar datos de lectora"} color="#1B262C" />
                    <span className="scannerNum">{scannerData.Serial}</span>
                </div>


                <UserInput label="N° serie:" inputType="text" value={scannerData.Serial} />
                <UserInput label="Modelo de lectora:" inputType="text" value={scannerData.Model} />
                <UserInput label="Cliente:" inputType="text" value={scannerData.Customer} />
                <UserInput label="Ubicación:" inputType="text" value={scannerData.Location} />
                <UserInput label="Observaciones:" inputType="text" value={scannerData.Observation} />

                <div className="formButtons">
                    <Button text="CANCELAR" type="secondary" action={cancelEdition} />
                    <Button text="CONFIRMAR" type="primary" action={submitEdition} />
                </div>
            </div>
        </SlidePanel>
    );
}