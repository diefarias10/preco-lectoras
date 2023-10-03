import React, { useState, useContext } from "react";
import './UserMenu.css';
import ButtonPanel from "./ButtonPanel/ButtonPanel";
import Button from "../UI/Button/Button";
import { AppContext } from "../../context/AppContext";


export default function UserMenu() {
    const { createMode, toggleCreateMode } = useContext(AppContext)

    return (
        <div className="menuContainer">
            <ButtonPanel />
            <div className="menuFooter">
                <Button text="AGREGAR LECTORA" type="primary" action={toggleCreateMode} />
            </div>
        </div>
    );
}

