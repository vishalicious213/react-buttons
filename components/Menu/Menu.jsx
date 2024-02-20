import React from "react"
import { createContext } from "react"
// import Toggle from "../Toggle"
import useToggle from "../../hooks/useToggle"

export const MenuContext = createContext()

export default function Menu({ children }) {
    const [open, toggleOpen] = useToggle()

    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className="menu">{children}</div>
        </MenuContext.Provider>

        // <Toggle onToggle={onOpen}>
        //     <div className="menu">
        //         {children}
        //     </div>
        // </Toggle>
    )
}

// import MenuButton from "./MenuButton"
// import MenuDropdown from "./MenuDropdown"
// import { createContext } from "react"

// const MenuContext = createContext()

// export default function Menu({ children }) {
//     const [open, setOpen] = React.useState(true)

//     function toggle() {
//         setOpen(prevOpen => !prevOpen)
//     }

//     return (
//         <MenuContext.Provider value={{open, toggle}}>
//             <div className="menu">
//                 {children}
//             </div>
//         </MenuContext.Provider>
//     )
// }

// export { MenuContext }