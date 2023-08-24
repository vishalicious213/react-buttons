import Button from "./Button"

export default function MenuButton({ onClick, children }) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}