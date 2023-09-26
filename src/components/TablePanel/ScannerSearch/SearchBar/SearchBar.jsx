import React from 'react';
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#1B262C" />
            <input type="number" placeholder="Numero de serie" />
        </div>
    );
}