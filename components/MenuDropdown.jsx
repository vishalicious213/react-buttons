import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const value = useContext(MenuContext)

    return value ? (<div className="menu-dropdown">{children}</div>) : null
}