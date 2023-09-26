import React from "react";
import "./LogoPreco.css";
import logoPreco from '../../../img/logoPreco.png';


export default function LogoPreco(){
    return(
        <div className="logoSection">
            <img src={logoPreco} alt="Logo de Precodata" className="logo"/>
        </div>
    );
}