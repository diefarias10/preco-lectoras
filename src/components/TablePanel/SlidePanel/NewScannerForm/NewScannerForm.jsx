import React, { useContext, useState } from "react";
import "./NewScannerForm.css";
import Title from "../../../UI/Title/Title";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import { AppContext } from "../../../../context/AppContext";

export default function NewScannerForm() {
    const { slidePanel, toggleSlidePanel } = useContext(AppContext)

    const rollbackForm = () => {
        toggleSlidePanel()
    }

    const submitForm=()=>{
        
    }

    return (
        <div className="newScannerForm">
            <Title text="Agregar nueva lectora" color="#1B262C" />
            <UserInput label="Fecha de alta:" type="text" placeholder="DD/MM/AAAA" />
            <UserInput label="N° serie:" type="number" placeholder="N° de serie de lectora" />
            <UserInput label="Modelo de lectora:" type="text" placeholder="Nombre de modelo" />
            <UserInput label="Cliente:" type="text" placeholder="Nombre de cliente" />
            <UserInput label="Ubicacion:" type="text" placeholder="Ubicacion fisica de lectora" />
            <UserInput label="Observaciones:" type="text" placeholder="(Opcional)" />
            <UserInput label="Estado inicial:" type="text" placeholder="Estado de lectora" />
            <div className="formButtons">
                <Button text="CANCELAR" type="secondary" action={ rollbackForm} />
                <Button text="CONFIRMAR" type="primary" />
            </div>
        </div>
    );
}