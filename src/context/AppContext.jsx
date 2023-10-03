import { createContext, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [slidePanel, setSlidePanel] = useState(false)
    const [createMode, setCreateMode] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [scannerList, setScannerList] = useState([
        {
            Serial: 111111,
            Date: '30/09/23',
            Model: 'VisionX',
            Customer: 'Precodata',
            Location: 'Soporte',
            State: 'Disponible',
            Observation: 'Ninguna'
        },
        {
            Serial: 222222,
            Date: '30/09/23',
            Model: 'VisionX',
            Customer: 'Precodata',
            Location: 'Soporte',
            State: 'En uso',
            Observation: 'Ninguna'
        },
        {
            Serial: 333333,
            Date: '30/09/23',
            Model: 'VisionX',
            Customer: 'Precodata',
            Location: 'Soporte',
            State: 'Mantenimiento',
            Observation: 'Ninguna'
        }]);
    const [scannerStates, setScannerStates] = useState(['Disponible', 'Mantenimiento', 'En uso', 'De baja'])


    const getScanners = async () => { // Trae todos las lectoras de Firebase para guardarlas en scannerList

        const tidyScanners = []
        const collectionRef = collection(db, 'scanners')

        try {
            const res = await getDocs(collectionRef);
            res.docs.forEach((item) => {
                const tidyItem = { ...item.data(), Id: item.id }
                tidyScanners.push(tidyItem)
            });
            setScannerList(tidyScanners);
        }
        catch (error) {
            console.error(error)
        }
    }

    const addScanner = (newScanner) => {
        /*addDoc(collection(db, 'scanners'), {
            Date: newScanner.date,
            Serial: newScanner.serial,
            Model: newScanner.model,
            Customer: newScanner.customer,
            Location: newScanner.location,
            Observations: newScanner.observation,
            State: newScanner.state
        })*/
        scannerList.push({
            Serial: newScanner.serial,
            Date: newScanner.date,
            Model: newScanner.model,
            Customer: newScanner.customer,
            Location: newScanner.location,
            State: newScanner.state,
            Observation: newScanner.observation
        })

    }

    const toggleSlidePanel = () => { // Muestra/Oculta panel lateral 
        setSlidePanel(!slidePanel)
    }

    const toggleCreateMode = () => { // Muestra/Oculta panel lateral 
        setCreateMode(!createMode)
    }

    const toggleEditMode = () => { // Muestra/Oculta panel lateral 
        setEditMode(!editMode)
    }

    return (
        <AppContext.Provider value={{ createMode, editMode, toggleCreateMode, toggleEditMode, getScanners, scannerList, scannerStates, addScanner }}>
            {children}
        </AppContext.Provider>
    );
}