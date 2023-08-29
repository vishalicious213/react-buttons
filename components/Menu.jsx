import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import { createContext } from "react"

const MenuContext = createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{open, toggle}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }