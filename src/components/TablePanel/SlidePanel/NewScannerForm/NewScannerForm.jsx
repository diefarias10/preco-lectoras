import React, { useContext, useState } from "react";
import "./NewScannerForm.css";
import Title from "../../../UI/Title/Title";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import { AppContext } from "../../../../context/AppContext";

export default function NewScannerForm() {
    const { slidePanel, toggleSlidePanel, addScanner } = useContext(AppContext)
    const [newScanner, setNewScanner] = useState({
        date: '',
        serial: 0,
        model: '',
        customer: '',
        location: '',
        observation: '',
        state: ''
    })

    // Guardo inputs del usuario en el estado newScanner 
    const getDateInput = (dateInput) => {
        setNewScanner({ ...newScanner, date: dateInput })
    }
    const getSerialInput = (serialInput) => {
        setNewScanner({ ...newScanner, serial: serialInput })
    }
    const getModellInput = (modelInput) => {
        setNewScanner({ ...newScanner, model: modelInput })
    }
    const getCustomerlInput = (customerInput) => {
        setNewScanner({ ...newScanner, customer: customerInput })
    }
    const getLocationlInput = (locationInput) => {
        setNewScanner({ ...newScanner, location: locationInput })
    }
    const getObservationInput = (observationInput) => {
        setNewScanner({ ...newScanner, observation: observationInput })
    }
    const getStateInput = (stateInput) => {
        setNewScanner({ ...newScanner, state: stateInput })
    }

    const resetNewScanner = () => {
        setNewScanner({ date: '', serial: 0, model: '', customer: '', location: '', observation: '', state: '' })
    }

    const rollbackForm = () => { // Resetea los datos de newScanner y cierra el formulario 
        toggleSlidePanel()
        resetNewScanner()
    }

    const submitForm = () => {
        console.log(newScanner)
    }

    return (
        <div className="newScannerForm">
            <Title text="Agregar nueva lectora" color="#1B262C" />
            <UserInput label="Fecha de alta:" type="text" placeholder="DD/MM/AAAA" action={getDateInput} />
            <UserInput label="N° serie:" type="number" placeholder="N° de serie de lectora" action={getSerialInput} />
            <UserInput label="Modelo de lectora:" type="text" placeholder="Nombre de modelo" action={getModellInput} />
            <UserInput label="Cliente:" type="text" placeholder="Nombre de cliente" action={getCustomerlInput} />
            <UserInput label="Ubicacion:" type="text" placeholder="Ubicacion fisica de lectora" action={getLocationlInput} />
            <UserInput label="Observaciones:" type="text" placeholder="(Opcional)" action={getObservationInput} />
            <UserInput label="Estado inicial:" type="text" placeholder="Estado de lectora" action={getStateInput} />

            <div className="formButtons">
                <Button text="CANCELAR" type="secondary" action={rollbackForm} />
                <Button text="CONFIRMAR" type="primary" action={submitForm} />
            </div>
        </div>
    );
}