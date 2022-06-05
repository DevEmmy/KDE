import {createContext} from "react"

const FunctionsApi = createContext()

const ContextProvider = ({children})=>{
    const api = "https://kde-api.herokuapp.com/"

    return(
        <FunctionsApi.Provider value={{api}}>
            {children}
        </FunctionsApi.Provider>
    )
}

export {ContextProvider, FunctionsApi}