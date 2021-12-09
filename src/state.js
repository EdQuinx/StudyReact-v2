import { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export function AppWrapper({ children }) {
    const [userinfo, setUserinfo] = useState(null)
    const [ingroups, setIngroups] = useState([])
    const [wtgroups, setWtgroups] = useState([])
    const [socketnoti, setSocketnoti] = useState(null);
    
    
    const sharedState = {
        igroups: [ingroups, setIngroups],
        wgroups: [wtgroups, setWtgroups],
        notisocket: [socketnoti, setSocketnoti],
        uinfo: [userinfo, setUserinfo],
    }
    
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}