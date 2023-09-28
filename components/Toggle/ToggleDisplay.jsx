import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const value = useContext(ToggleContext)

    console.log(value)

    return children(value)

    // return (
    //     <div>
    //         { children }
    //     </div>
    // )
}