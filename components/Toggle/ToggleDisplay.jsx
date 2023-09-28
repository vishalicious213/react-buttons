import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const { on } = useContext(ToggleContext)

    return children(on)

    // return (
    //     <div>
    //         { children }
    //     </div>
    // )
}