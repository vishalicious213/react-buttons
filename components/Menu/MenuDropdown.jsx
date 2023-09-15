// import { useContext } from "react"
// import { MenuContext } from "./Menu"

// export default function MenuDropdown({ children }) {
//     const { open } = useContext(MenuContext)

//     return open ? (<div className="menu-dropdown">{children}</div>) : null
// }

import Toggle from "../Toggle"

export default function MenuDropdown({ children }) {
    return (
        <Toggle.On>
            <div className="menu-dropdown">{children}</div>
        </Toggle.On>
    )
}