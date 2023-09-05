import React from "react"
import { useState } from "react"

export default function Toggle() {
    const [on, setOn] = useState(false)

    function toggle(on) {
        setOn(on => !on)
    }
}