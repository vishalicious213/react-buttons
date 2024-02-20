import Button from "../Button"
// import Toggle from "../Toggle"
import useToggle from "../../hooks/useToggle"

export default function MenuButton({ children }) {
    const [open, toggleOpen] = useToggle()

    return (
        <Button>{children}</Button>
        // <Toggle.Button>
        //     <Button>{children}</Button>
        // </Toggle.Button>
    )
}

// import { useContext } from "react"
// import { MenuContext } from "./Menu"

// export default function MenuButton({ children }) {
//     const { toggle } = useContext(MenuContext)
    
//     return (
//         <Button onClick={toggle}>{children}</Button>
//     )
// }