import { createContext, useState } from "react";

const stateContext = createContext()

const State = (props) => {
    const [searchData, setSearchData] = useState("")
    const [finalData, setFinalData] = useState(null)
    const [loader, setLoader] = useState(false)
        return(
            <stateContext.Provider value={{ searchData, setSearchData, finalData, setFinalData, loader, setLoader}}>
                {props.children}
            </stateContext.Provider>
        )
}

export default State
export {stateContext}