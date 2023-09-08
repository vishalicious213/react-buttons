// This component flips state from Toggle back and forth when it's child is clicked

import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButton({ children }) {
    const value = useContext(ToggleContext)

    return (
        <div onClick={value.toggle}>
            { children }
        </div>
    )
}