import React from "react"
// import Toggle from "./Toggle"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle"

export default function CompoundStar({ onChange }) {
    const [on, toggle] = useToggle()
    
    return (
        <>
            {on 
                ? <BsStarFill className="star filled" onClick={toggle} /> 
                : <BsStar className="star" onClick={toggle} />
            }
        </>


        // <BsStar 
        //     className={on ? "star filled" : "star"} 
        //     onClick={toggle}
        // />

        // <Toggle onToggle={onChange}>
        //     <Toggle.Button>
        //         <Toggle.On>
        //             <BsStarFill className="star filled" />
        //         </Toggle.On>
        //         <Toggle.Off>
        //             <BsStar className="star " />
        //         </Toggle.Off>
        //     </Toggle.Button>
        // </Toggle>
    )
}