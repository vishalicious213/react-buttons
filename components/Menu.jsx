import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
        console.log(open)
    }

    return (
        <div className="menu">
            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
            {/* <MenuButton
                buttonText={buttonText}
                onClick={toggle}
            />

            {open && <MenuDropdown items={items} />} */}
        </div>
    )
}
