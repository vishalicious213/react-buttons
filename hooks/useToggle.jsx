import React from "react"
import { useState } from "react"

export default function useToggle(initialValue=false, onToggle = () => {}) {
    const [on, setOn] = useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return [on, toggle]
}