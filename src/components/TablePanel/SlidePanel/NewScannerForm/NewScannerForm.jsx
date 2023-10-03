import React, { useContext, useState } from "react";
import "./NewScannerForm.css";
import SlidePanel from "../SlidePanel";
import Title from "../../../UI/Title/Title";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import { AppContext } from "../../../../context/AppContext";
import UserSelect from "../../../UI/UserSelect/UserSelect";
import ItemState from "../../../UI/ItemState/ItemState";

export default function NewScannerForm({ visible }) {
    const {  toggleCreateMode, addScanner, scannerStates } = useContext(AppContext)
    const [newScanner, setNewScanner] = useState({
        date: '',
        serial: 0,
        model: '',
        customer: '',
        location: '',
        observation: '',
        state: 'Disponible'
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
        console.log('La opcion elegida es:' + stateInput)
    }

    const resetNewScanner = () => {
        setNewScanner({ date: '', serial: 0, model: '', customer: '', location: '', observation: '', state: '' })
    }

    const rollbackForm = () => { // Resetea los datos de newScanner y cierra el formulario 
        toggleCreateMode()
        resetNewScanner()
    }

    const submitForm = () => {
        console.log(newScanner)
        addScanner(newScanner)
        toggleCreateMode()
    }

    return (
        <SlidePanel visible={visible}>
            <div className="newScannerForm">
                <Title text="Agregar nueva lectora" color="#1B262C" />
                <UserInput label="Fecha de alta:" type="date" placeholder="DD/MM/AAAA" action={getDateInput} />
                <UserInput label="N° serie:" type="number" placeholder="N° de serie de lectora" action={getSerialInput} />
                <UserInput label="Modelo de lectora:" type="text" placeholder="Nombre de modelo" action={getModellInput} />
                <UserInput label="Cliente:" type="text" placeholder="Nombre de cliente" action={getCustomerlInput} />
                <UserInput label="Ubicacion:" type="text" placeholder="Ubicacion fisica de lectora" action={getLocationlInput} />
                <UserInput label="Observaciones:" type="text" placeholder="(Opcional)" action={getObservationInput} />

                <div className="formButtons">
                    <Button text="CANCELAR" type="secondary" action={rollbackForm} />
                    <Button text="CONFIRMAR" type="primary" action={submitForm} />
                </div>
            </div>
        </SlidePanel>
    );
}
