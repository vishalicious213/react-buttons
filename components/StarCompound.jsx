import React from "react"
import Toggle from "./Toggle"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function CompoundStar() {
    return (
        <Toggle>
            <Toggle.Button>
                <Toggle.On>
                    <BsStarFill className="star filled" />
                </Toggle.On>
                <Toggle.Off>
                    <BsStar className="star " />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}