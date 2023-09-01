import Button from "../Button"
import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {
    const { toggle } = useContext(MenuContext)
    
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}