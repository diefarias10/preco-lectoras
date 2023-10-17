import React from "react";
import { useEffect, useState, useContext } from "react";
import "./TablePanel.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import ItemState from "../UI/ItemState/ItemState";
import UserControls from "./UserControls/UserControls";
import ScannerSearch from "./ScannerSearch/ScannerSearch";
import SlidePanel from "./SlidePanel/SlidePanel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../context/AppContext";
import NewScannerForm from "./SlidePanel/NewScannerForm/NewScannerForm";
import EditScannerForm from "./SlidePanel/EditScannerForm/EditScannerForm";


export default function TablePanel() {
    const { editMode, createMode, toggleEditMode, toggleCreateMode, getScanners, scannerList } = useContext(AppContext)
    const [editionData, setEditionData] = useState({})

    useEffect(() => {
        //getScanners()
    }, [scannerList])


    const saveEditionData = (scanner) => {
        setEditionData(scanner)
        toggleEditMode()
    }



    return (
        <div className="tablePanel">
            <div>
                <ScannerSearch />
                <table className="scannersTable">
                    <thead>
                        <tr>
                            <h1>Lectoras</h1>
                        </tr>
                        <tr className="colNames">
                            <th><p>N° serie</p></th>
                            <th><p>Fecha ingreso</p></th>
                            <th><p>Modelo</p></th>
                            <th><p>Cliente</p></th>
                            <th><p>Ubicación</p></th>
                            <th><p>Estado</p></th>
                        </tr>
                    </thead>
                    <tbody>

                        {scannerList.map((item, index) => (
                            <tr key={index}>
                                <td><p>{item.Serial}</p></td>
                                <td><p>{item.Date}</p></td>
                                <td><p>{item.Model}</p></td>
                                <td><p>{item.Customer}</p></td>
                                <td><p>{item.Location}</p></td>
                                <td><ItemState state={item.State} /></td>
                                <td>
                                    <UserControls scanner={item} getScannerData={saveEditionData} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <NewScannerForm visible={createMode} />
            <EditScannerForm visible={editMode} scannerData={editionData} />


        </div>
    );
}