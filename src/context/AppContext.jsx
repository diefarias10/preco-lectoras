import { createContext, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [slidePanel, setSlidePanel] = useState(true)
    const [scannerList, setScannerList] = useState([]);


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
        addDoc(collection(db, 'scanners'), { newScanner })
    }

    const toggleSlidePanel = () => { // Muestra/Oculta panel lateral 
        setSlidePanel(!slidePanel)
    }

    return (
        <AppContext.Provider value={{ slidePanel, toggleSlidePanel, getScanners, scannerList, addScanner }}>
            {children}
        </AppContext.Provider>
    );
}