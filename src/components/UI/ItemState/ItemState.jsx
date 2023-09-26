import React, { useEffect, useState } from "react";
import "./ItemState.css";


export default function ItemState({ state }) {
    const [stateType, setStateType] = useState('');

    useEffect(() => {
        changeState(state)
    }, [stateType])


    const changeState = (state) => {

        if (state == 'Disponible') {
            setStateType('green')
        }
        else if (state == 'En uso') {
            setStateType('blue')
        }
        else if (state == 'De baja') {
            setStateType('red')
        }
        else if (state == 'Mantenimiento') {
            setStateType('yellow')
        }
    }

    return (
        <div className={"statePill " + stateType}>
            <p className="text">{state}</p>
        </div>
    );
}