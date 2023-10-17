import React, { useContext, useState, useEffect } from "react";
import "./NewScannerForm.css";
import SlidePanel from "../SlidePanel";
import Title from "../../../UI/Title/Title";
import UserInput from "../../../UI/UserInput/UserInput";
import Button from "../../../UI/Button/Button";
import { AppContext } from "../../../../context/AppContext";
import UserSelect from "../../../UI/UserSelect/UserSelect";
import ItemState from "../../../UI/ItemState/ItemState";

export default function NewScannerForm({ visible }) {
    const { toggleCreateMode, addScanner, scannerStates } = useContext(AppContext)
    const [newScanner, setNewScanner] = useState({
        date: '',
        serial: '',
        model: '',
        customer: '',
        location: '',
        observation: '',
        state: 'Disponible'
    })

    useEffect(() => {

        console.log(newScanner)
    }, [toggleCreateMode])

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

    const resetNewScanner = () => {
        setNewScanner({
            date: '',
            serial: 0,
            model: '',
            customer: '',
            location: '',
            observation: '',
            state: 'Disponible'
        })
    }

    const rollbackForm = () => { // Resetea los datos de newScanner y cierra el formulario 
        resetNewScanner()
        toggleCreateMode()
    }

    const submitForm = () => {
        console.log('Se agregó lectora correctamente: ' + newScanner)
        addScanner(newScanner)
        toggleCreateMode()
    }

    return (
        <SlidePanel visible={visible}>
            <div className="newScannerForm">
                <Title text="Agregar nueva lectora" color="#1B262C" />

                <UserInput label="Fecha de alta" type="date" placeholder="DD/MM/AAAA" value={newScanner.date} action={getDateInput} />
                <UserInput label="N° serie" type="number" placeholder="N° de serie de lectora" value={newScanner.serial} action={getSerialInput} />
                <UserInput label="Modelo" type="text" placeholder="Nombre de modelo" value={newScanner.model} action={getModellInput} />
                <UserInput label="Cliente" type="text" placeholder="Nombre de cliente" value={newScanner.customer} action={getCustomerlInput} />
                <UserInput label="Ubicacion" type="text" placeholder="Ubicacion fisica de lectora" value={newScanner.location} action={getLocationlInput} />
                <UserInput label="Observaciones" type="text" placeholder="(Opcional)" value={newScanner.observation} action={getObservationInput} />

                <div className="formButtons">
                    <Button text="CANCELAR" type="secondary" action={rollbackForm} />
                    <Button text="CONFIRMAR" type="primary" action={submitForm} />
                </div>
            </div>
        </SlidePanel>
    );
}
