// This component shares state and a state setter function through context

import React from "react"
import { useState, useEffect, createContext } from "react"

const ToggleContext = createContext()

export default function Toggle({ children, onToggle }) {
    const [on, setOn] = useState(false)

    useEffect(() => {
        console.log("on", on)
    }, [on])

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