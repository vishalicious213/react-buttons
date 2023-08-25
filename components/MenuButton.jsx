import Button from "./Button"

export default function MenuButton({ toggle, children }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}