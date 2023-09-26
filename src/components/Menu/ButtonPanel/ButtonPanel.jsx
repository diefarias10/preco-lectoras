import React from "react";
import "./ButtonPanel.css";
import MenuButton from "./MenuButton/MenuButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faBoxesStacked, faHouse,faClipboardList } from '@fortawesome/free-solid-svg-icons';

export default function ButtonPanel(){
    return(
        <div className="buttonPanel">
            <MenuButton text="Inicio" icon={faHouse}/>
            <MenuButton text="Todas las lectoras" icon={faClipboardList}/>
            <MenuButton text="Lectoras disponibles" icon={faBoxesStacked}/>
            <MenuButton text="Lectoras en uso" icon={faHeadset}/>
        </div>

    );
}