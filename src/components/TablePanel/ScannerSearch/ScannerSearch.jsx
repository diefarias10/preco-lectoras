import React from "react";
import "./ScannerSearch.css";
import Button from "../../UI/Button/Button";
import SearchBar from "./SearchBar/SearchBar";

export default function ScannerSearch() {
    return (
        <div className="scannerSearch">
            <span className="searchTitle">Buscar lectora</span>
            <SearchBar/>
        </div>
    );
}