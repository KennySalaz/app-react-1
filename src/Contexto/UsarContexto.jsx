import { useContext, createContext, useReducer } from 'react'


export const ContextoCreado = createContext()


export const Envolverapp = ({ initialState, DefinicionDeFunciones, children }) => {
    return (
        <ContextoCreado.Provider value={useReducer(DefinicionDeFunciones,initialState)}>
            {children}
        </ContextoCreado.Provider>
    )
}
export const UsarContexto = () => useContext(ContextoCreado)