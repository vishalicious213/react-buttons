// This component shares state and a state setter function through context

import React from "react"
import { useState, createContext } from "react"

const ToggleContext = createContext()

export default function Toggle({ children}) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            { children }
        </ToggleContext.Provider>
    )
}

export { ToggleContext }