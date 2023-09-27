import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const value = useContext(ToggleContext)

    console.log(value.on)

    return (
        <div>
            { children }
        </div>
    )
}