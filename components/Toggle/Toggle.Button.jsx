import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function Button() {
    const value = useContext(ToggleContext)

    return (
        <div onClick={value.toggle}>
            { children }
        </div>
    )
}