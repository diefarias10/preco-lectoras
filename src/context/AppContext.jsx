import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [slidePanel, setSlidePanel] = useState(true)


    const toggleSlidePanel = () => {
        console.log('Activo / desactivo panel')
        setSlidePanel(!slidePanel)
    }

    return (
        <AppContext.Provider value={{ slidePanel, toggleSlidePanel }}>
            {children}
        </AppContext.Provider>
    );
}