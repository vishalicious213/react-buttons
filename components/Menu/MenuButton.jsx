import Button from "../Button"
import Toggle from "../Toggle"

export default function MenuButton({ children }) {
    return (
        <Toggle.Button>
            <Button>{children}</Button>
        </Toggle.Button>
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