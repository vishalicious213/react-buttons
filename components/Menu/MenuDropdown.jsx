// import { useContext } from "react"
// import { MenuContext } from "./Menu"

// export default function MenuDropdown({ children }) {
//     const { open } = useContext(MenuContext)

//     return open ? (<div className="menu-dropdown">{children}</div>) : null
// }

// import Toggle from "../Toggle"
import useToggle from "../../hooks/useToggle"

export default function MenuDropdown({ children }) {
    const [open, toggleOpen] = useToggle()

    return (
        <div className="menu-dropdown"></div>
        // <Toggle.On>
        //     <div className="menu-dropdown">{children}</div>
        // </Toggle.On>
    )
}