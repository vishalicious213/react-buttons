import Button from "../Button"

export default function MenuButton({ children }) {
    return <Button>{children}</Button>
}

// import { useContext } from "react"
// import { MenuContext } from "./Menu"

// export default function MenuButton({ children }) {
//     const { toggle } = useContext(MenuContext)
    
//     return (
//         <Button onClick={toggle}>{children}</Button>
//     )
// }