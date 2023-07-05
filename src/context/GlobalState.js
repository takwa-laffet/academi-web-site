import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer.js"
import { initialState } from "./AppReducer.js";

const GlobalContext = createContext()


function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider value={{user: state.user, dispatch : dispatch}} >
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export const useAuth = () => {
    return useContext(GlobalContext)
}