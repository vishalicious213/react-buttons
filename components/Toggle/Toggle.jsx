import React from "react"
import { useState } from "react"

export default function Toggle({ children}) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return children
}