// This component shares state and a state setter function through context

import React from "react"
import { createContext } from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"
import useToggle from "../../hooks/useToggle"

const ToggleContext = createContext()

export default function Toggle({ children, onToggle }) {
    const [on, toggle] = useToggle()

    useEffectOnUpdate(onToggle, [on])

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            { children }
        </ToggleContext.Provider>
    )
}

export { ToggleContext }