import { createContext, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [slidePanel, setSlidePanel] = useState(true)
    const [scannerList, setScannerList] = useState([]);
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
        addDoc(collection(db, 'scanners'), {
            Date: newScanner.date,
            Serial: newScanner.serial,
            Model: newScanner.model,
            Customer: newScanner.customer,
            Location: newScanner.location,
            Observations: newScanner.observation,
            State: newScanner.state
        })
    }

    const toggleSlidePanel = () => { // Muestra/Oculta panel lateral 
        setSlidePanel(!slidePanel)
    }

    return (
        <AppContext.Provider value={{ slidePanel, toggleSlidePanel, getScanners, scannerList, scannerStates, addScanner }}>
            {children}
        </AppContext.Provider>
    );
}