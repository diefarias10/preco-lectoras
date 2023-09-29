import React, { useState } from "react";
import "./UserSelect.css";

export default function UserSelect({ label, options, selection }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelection = (e) => {
        setSelectedOption(e.target.value);
        selection(selectedOption)
    }

    return (
        <div className="userSelect">
            <span className="label"> {label} </span>
            <select value={selectedOption} onChange={handleSelection}>
                <option value="">Seleccionar...</option>
                {options.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>

    )
}