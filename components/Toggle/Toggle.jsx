// This component shares state and a state setter function through context

import React from "react"
import { useState, useEffect, useRef, createContext } from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"

const ToggleContext = createContext()

export default function Toggle({ children, onToggle }) {
    const [on, setOn] = useState(false)

    useEffectOnUpdate(onToggle, [on])
    // const firstRender = useRef(true)

    // useEffect(() => {
    //     if (typeof onToggle === "function") {
    //         if (firstRender.current) {
    //             firstRender.current = false
    //         } else {
    //             onToggle()
    //         }
    //     }
    // }, [on])

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