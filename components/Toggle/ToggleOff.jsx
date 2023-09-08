// displays wrapped elements when Toggle state is "off"

import React from "react"
import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOff({ children }) {
    const { on } = useContext(ToggleContext)

    return on ? null : children
}