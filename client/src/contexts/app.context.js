import React, { createContext, useReducer, useMemo } from 'react';
import appReducer from '../reducers/app.reducer';
import { MODAL_ADD } from '../constants/constants';

const initialState = {
    currList : 'items',
    items: [],
    clients: [],
    diversities: [],
    showModal: false,
    modalState: MODAL_ADD,
    showPrompt: false,
    msgPrompt: '',
    currentListItemId: ''
}

export const AppContext = createContext();
export function AppProvider(props) {
    const [state, dispatch] = useReducer(appReducer, initialState);
    
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);
    
    return (
         <AppContext.Provider value={contextValue}> 
                {props.children}
        </AppContext.Provider>
    );
}